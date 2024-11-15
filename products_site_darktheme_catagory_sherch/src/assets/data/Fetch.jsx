import { useEffect, useState } from "react";  

const useFetch = () => {  
    let [products, setProducts] = useState([]);  

    let getData = async () => {  
        fetch("https://dummyjson.com/products")  
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }
    console.log(products)
    useEffect(() => {  
        getData(); 
    }, []);
    
    return products; 
}  

export default useFetch;