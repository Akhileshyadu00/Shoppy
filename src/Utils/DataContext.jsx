import { createContext, useContext, useState } from "react";
import axios from "axios"
//import { DataContext} from "../Utils/DataContext"

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
    //
    const getUniqueCategory = (data, property) => {
    const newVal = data?.map((curElem) => curElem[property]);
    const uniqueValues = [...new Set(newVal)];
    return uniqueValues;
  };

  const categoryOnlyData = getUniqueCategory(data, 'category');

    return <DataContext.Provider value={{data, setData, fetchProduct, categoryOnlyData}}>
        {children}
    </DataContext.Provider>
}

//Custom Hooks

export const useData = () => useContext(DataContext);

