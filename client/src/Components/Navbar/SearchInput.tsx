import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleBackDropState } from "../../Redux/Slices/BackDropSlice";
import { toggleCartState } from "../../Redux/Slices/CartSlice";
import SearchIcon from '@mui/icons-material/Search';


export interface ISearchInput {
    isOpen : boolean
    SearchData : string
    setSearchData : React.Dispatch<React.SetStateAction<string>>
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}
const SearchInput = ({isOpen,SearchData ,setSearchData ,setOpen} : ISearchInput) => {
    const HandleSubmit = (e : React.FormEvent < HTMLFormElement >) => {
        e.preventDefault()
    }
    const dispatch = useDispatch()

    return (
        <Box
            onSubmit={HandleSubmit}
            sx={{
            display: 'flex',
            borderRadius: `${isOpen
                ? '0px'
                : '17px'}`,
            background: {
                xs: 'white',
                md: '#f1f1f1'
            }
        }}
            className='searchForm trans'
            component='form'>
            <Box
                sx={{
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }}>

                <input
                    onChange={(e) => setSearchData(e.target.value)}
                    value={`${SearchData}`}
                    placeholder='Search'
                    className='searchInput'
                    type="search"/>
            </Box>
            <IconButton
                onClick={() => {
                dispatch(toggleCartState(false));
                dispatch(toggleBackDropState(false));
                setOpen(!isOpen)
            }}
                sx={{
                color: '#3d3d3d'
            }}
                type='submit'>
                <SearchIcon/>
            </IconButton>
        </Box>

    )
}

export default SearchInput