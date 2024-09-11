import { useEffect, useState } from "react";  

const useFetch = () => {  
    let [products, setProducts] = useState([]);  

    let getData = async () => {  
        fetch("https://fakestoreapi.com/products")  
            .then((res) => res.json())  
            .then((data) => {  
                setProducts(data);  
            })  
    }  
    
    useEffect(() => {  
        getData(); 
    }, []);
    
    return products; 
}  

export default useFetch;