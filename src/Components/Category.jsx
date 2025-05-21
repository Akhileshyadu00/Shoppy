import React, { useEffect }  from 'react'
import { useData } from '../Utils/DataContext'

function Category() {
    const {data, fetchProduct} = useData()

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        })
        // for unique category only
         const uniqueValues = [...new Set(newVal)];
         return uniqueValues;
    }
    const  categoryOnlyData = getUniqueCategory(data, "category")
    console.log(categoryOnlyData);

    useEffect (() => {
        fetchProduct()
    }, [])
    

  return (
    <>
      <div className='bg-[#101829]'>
        <div className=' max-w-7xl mx-auto flex gap-4 items-center justify-center'>
            {
                categoryOnlyData.map((item, index) => {
                    return <div key={index}> 
                    <button className='uppercase bg-gradient-to-r from-[#0f0c27] via-[#330b26] to-[#0f0c27] text-white'>{item}</button>
                    </div>
                })
            }

        </div>
      </div>
    </>
  )
}


export default Category
