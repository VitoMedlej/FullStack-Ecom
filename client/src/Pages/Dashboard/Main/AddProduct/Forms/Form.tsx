import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import CBox from "../../../../../Components/CustomMui/CBox"
import CTypo from "../../../../../Components/CustomMui/CTypo"

interface IForm {
    formTitle : string
    formName : string
    handleChange : (e : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => void
    formType?: string
    stateValue : number | string | string[]
    placeholder?: string
}

const Form = ({
    formTitle,
    formType,
    placeholder,
    stateValue,
    formName,
    handleChange
} : IForm) => {
    const FormSwitch = (param : string) => {
        switch (param) {
            case 'textarea':
                return <TextField
                sx={{width:'100%'}}
                    onChange={handleChange}
                    placeholder={`${placeholder}`}
                    multiline
                    value={stateValue}
                    rows={5}
                    id="outlined-basic"
                    variant="outlined"
                    name={`${formName}`}  
                   />

                // <textarea rows={5} 
                // placeholder={`${placeholder}`}
                // value={stateValue}
                // onChange={handleChange}    
                //     className='searchInput wfull'
                // name={`${formName}`}         id=""></textarea>

            default:
                return <TextField
                sx={{width:'100%'}}
                    onChange={handleChange}
                    placeholder={`${placeholder}`}
                    type={formType || "text"}
                    value={stateValue}
                    variant="outlined"
                    name={`${formName}`}  
                   />


                // <input
                //     placeholder={`${placeholder}`}
                //     value={stateValue}
                //     onChange={handleChange}
                //     type={formType || "text"}
                //     name={`${formName}`}
                //     className='searchInput wfull'/>

        }
    }
    return (
        <CBox sx={{
            pt: '1.5em'
        }}>
            <Box>
                <CTypo
                    sx={{
                    mt: 0
                }}
                    text={`${formTitle}`}/>
                <Box
                    sx={{
                    display: 'flex',
                    width: {
                        xs: '100%'
                    }
                }}
                    className='searchForm2'>

                    <Box
                        sx={{
                        width: '100%',
                        background: 'white'
                    }}>

                        {FormSwitch(formType || 'text')}

                    </Box>
                </Box>
            </Box>

        </CBox>
    )
}

export default Form