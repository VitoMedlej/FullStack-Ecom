import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    FormControl,

    MenuItem,
    Select,
    Skeleton,
    Slider,
    Typography
} from "@mui/material"
import TuneIcon from '@mui/icons-material/Tune';
import {useEffect, useRef, useState} from "react";
import CTypo from "../CustomMui/CTypo";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {colors} from "../../Pages/Dashboard/Main/AddProduct/AddProduct";

interface IFilter {
    condition : boolean
}
const FilterSection = ({condition} : IFilter) => {
    const [isVisible,
        setVisible] = useState(false);
    const [value,
        setValue] = useState < number > (4000);

    const handleChange = (event : Event, newValue : number | number[]) => {
        setValue(newValue as number);
    };

    return (

        <Box className='trans'>
            {condition
                ? <Box
                        className='trans'
                        sx={{
                        display: {
                            xs: `${isVisible
                                ? 'block'
                                : 'none'}`,
                            md: 'block'
                        }
                    }}>

                        <Box className='trans'>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>

                                <CTypo
                                    sx={{
                                    pb: '.5em'
                                }}
                                    text='Filter by'></CTypo>
                                <Button>Clear all</Button>
                            </Box>
                            <Accordion
                                sx={{
                                boxShadow: 'none',
                                borderTop: '1px solid #e8e8e8'
                            }}>
                                <AccordionSummary
                                    expandIcon={< ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Price</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    $1 - ${value}
                                    <Slider
                                        min={1}
                                        max={4000}
                                        value={value}
                                        onChange={handleChange}
                                        defaultValue={1}
                                        aria-label="Default"
                                        valueLabelDisplay="off"/>
                                </AccordionDetails>
                            </Accordion >
                            <Accordion
                                sx={{
                                mt: '1em',
                                boxShadow: 'none'
                            }}>
                                <AccordionSummary
                                    sx={{
                                    boxShadow: 'none',
                                    borderTop: '1px solid #e8e8e8'
                                }}
                                    expandIcon={< ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Color</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {colors.map(color => {

                                        return <Checkbox
                                            key={color}
                                            size='medium'
                                            sx={{
                                            color: `${color === 'white'
                                                ? ' #80808045'
                                                : color}`,
                                            '&.Mui-checked': {
                                                color: `${color === 'white'
                                                    ? ' #80808045'
                                                    : color}`
                                            }
                                        }}/>
                                    })}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                mt: '1em',
                                boxShadow: 'none'
                            }}>
                                <AccordionSummary
                                    sx={{
                                    boxShadow: 'none',
                                    borderTop: '1px solid #e8e8e8'
                                }}
                                    expandIcon={< ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Size</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl fullWidth>
                                        <Select
                                            variant='standard'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={11}
                                            label="Age">
                                            <MenuItem value={8}>small</MenuItem>
                                            <MenuItem value={11}>medium</MenuItem>
                                            <MenuItem value={15}>large</MenuItem>
                                        </Select>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                    </Box>
                : <Box
                    sx={{
                    display: {
                        xs: 'none',
                        lg: 'block'
                    }
                }}>
                    <Skeleton height={30}/>
                    <Skeleton height={70}/>
                    <Skeleton height={70}/>
                    <Skeleton height={70}/>

                </Box>
}
            <Button
                onClick={() => setVisible(!isVisible)}
                sx={{
                display: {
                    xs: 'flex',
                    md: 'none'
                },
                background: 'white',
                mt: '.5em',
                color: 'black',
                border: '1px solid gray',
                ':hover': {
                    color: ' white',
                    background: 'black',
                    border: '1px solid gray'
                }
            }}
                variant="outlined"
                startIcon={< TuneIcon />}>
                Show Filter
            </Button>
        </Box>

    )
}

export default FilterSection