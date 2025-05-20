import { createContext, useState } from "react";
import axios from "axios"

export const DataContext = createContext(null)

export const DataProvider = ({children}) => {
    const [data, setData] = useState()

    //fetch product from APi

    const fetchProduct = async() => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            //console.log(res)
            const productData = res.data.products
            setData(productData); // ✅ Store the fetched data


        } catch (error) {
            console.log(error);
            
        }
    }

    return <DataContext.Provider value={{data, setData, fetchProduct}}>
        {children}
    </DataContext.Provider>
}
