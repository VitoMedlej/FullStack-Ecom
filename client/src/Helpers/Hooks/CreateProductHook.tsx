import {SelectChangeEvent} from "@mui/material/Select";
import {useState} from "react";

interface IformData {
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
    Manufacturer : string;
}

const CreateProductHook = () => {

    const [formData,
        setFormData] = useState < IformData > ({
        title: "",
        sizes: [],
        price: '',
        images: [''],
        inStock: false,
        description: "",
        category: '',
        specifications: [],
        Manufacturer: "",
        reviews: []
    })
    const HandleImagesChange = (array : string[]) => {
        setFormData({
            ...formData,
            images: [...array]
        })
    }

    // const HandleSelectChange = (e : SelectChangeEvent < string[] | number[] >) => {
    //     const target = e.target.value as string[] | number[]
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: [...target]
    //     })
    // }
    function handleChange(e : SelectChangeEvent | (React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >)) {

        if (e.target.name !== 'checked') {
           
        }

        // if (e.target.name === 'specifications') {
        //     let val = value as string;

        //     // const finalValue = val.replace(/\r\n/g,'\n').split('\n');
        //     // console.log('finalValue: ', finalValue);

        //     setFormData({
        //         ...formData,
        //         specifications: [val]
        //     });

        // } 
        if (e.target.name === 'specifications') {
            console.log('spec');
            
            
        }
       else {

          
        } 
        

    }
    const handleTextChange = (e:React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) =>{
        const value = e.target.value

        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
    const handleCheckChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        setFormData({
            ...formData,
            inStock: checked
         })
    }
    const handleSelectChange = (e :SelectChangeEvent <number[] | string[]> ) => {
        const value = e.target.value as string 
        setFormData({
             ...formData,
            specifications: [value]
            });
    }
    const handleCategoryChange = (e : SelectChangeEvent) => {
            const value = e.target.value as string 
            setFormData({
             ...formData,
            [e.target.name]: value
            });
    }

    // const handleSelectChange = (e: SelectChangeEvent < number[] | string[] >  ) => {
    //         const value = e.target.value as string

    //         // const finalValue = val.replace(/\r\n/g,'\n').split('\n');
    //         // console.log('finalValue: ', finalValue);

    //         setFormData({
    //             ...formData,
    //             specifications: [value]
    //         });
    // }
    // const handleSelectChange = (event : SelectChangeEvent) => {
    // setCategory(event.target.value as string); };
    return {handleChange, handleCategoryChange,handleSelectChange, handleTextChange, handleCheckChange, HandleImagesChange, formData}
}

export default CreateProductHook