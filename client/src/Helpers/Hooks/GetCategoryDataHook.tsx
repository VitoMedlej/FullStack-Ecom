import {useState} from "react";

interface ICateData {
    link : string;
    id : number;
    title : string;
    desc : string;
    img : string;
    _id ?: string
}


const GetCategoryDataHook = () => {
    
    const [categories,
        setCategories] = useState < ICateData[] > ([])
    const [isLoading,
        setLoading] = useState(false)

    const GetCategories = async() => {
        try {
            setLoading(true)

            
            const request = await fetch(`${process.env.REACT_APP_URL || 'sbw-ecom.onrender.com/'}categories `)
            const results = await request.json();
            setCategories(results);
            setLoading(false);

        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }

    return {GetCategories, categories, isLoading}
}

export default GetCategoryDataHook