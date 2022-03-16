import {useState} from "react";

interface ICateData {
    link : string;
    id : number;
    title : string;
    desc : string;
    img : string;
}


const GetCategoryDataHook = () => {
    
    const [categories,
        setCategories] = useState < ICateData[] > ([])
    const [isLoading,
        setLoading] = useState(false)

    const GetCategories = async() => {
        try {
            setLoading(true)

            const request = await fetch('http://localhost:9000/categories')
            const results = await request.json()
            setCategories(results)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }

    return {GetCategories, categories, isLoading}
}

export default GetCategoryDataHook