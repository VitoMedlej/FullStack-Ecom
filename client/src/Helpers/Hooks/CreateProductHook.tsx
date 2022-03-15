import {SelectChangeEvent} from "@mui/material/Select";
import {useState} from "react";
import {nanoid} from 'nanoid'

export interface IformData {
    title : string;
    sizes : number[];
    price : string;
    images : string[];
    specifications : string[]
    inStock : boolean;
    description : string;
    category : string;
    reviews : {
        reviewer: string,
        stars: number,
        comment: string
    }[]
    id : string;
    weight : string;
    style : string;
    country : string
    colors : string[]
    Manufacturer : string;
}


const defaultProductValues = {
    title: "",
    sizes: [],
    colors: [''],
    price: '',
    images: [''],
    inStock: false,
    weight: '',
    style: '',
    country: '',
    description: "",
    category: '',
    id:`${ nanoid()}`,
    specifications: [''],
    Manufacturer: "",
    reviews: []
}

const CreateProductHook = () => {
 
    const [formData,
        setFormData] = useState < IformData > (defaultProductValues)
    const HandleImagesChange = (array : string[]) => {
        setFormData({
            ...formData,
            images: [...array]
        })
    }
    const resetForm = () => {
        setFormData(defaultProductValues)
    }

    const handleTextChange = (e : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        const value = e.target.value
        const name = e.target.name

        setFormData({
            ...formData,
            [name]: value
        });

    }

    const handleCheckChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        const checked = e.target.checked
        setFormData({
            ...formData,
            inStock: checked
        })
    }
    const handleSelectChange = (e : SelectChangeEvent < number[] | string[] >) => {
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
    const handleCategoryChange = (e : SelectChangeEvent) => {
        const value = e.target.value as string
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
    
    return {
        handleCategoryChange,
        handleSelectChange,
        handleTextChange,
        handleCheckChange,
        HandleImagesChange,
        formData,
       
        resetForm
    }
}

export default CreateProductHook