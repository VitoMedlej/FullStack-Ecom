import {Box, IconButton} from "@mui/material"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import SearchInput from "../SearchInput";
import MobileSearchMenu from "./MobileSearchMenu";

const SearchBar = () => {
    const dispatch = useDispatch()

    const [isOpen,
        setOpen] = useState(false)
    const [SearchData,
        setSearchData] = useState('')
    const [query,
        setQuery] = useState('')
    useEffect(() => {
        if (SearchData.length > 2 && !isOpen) {
            setOpen(true)
            return
        }

    }, [SearchData])

    useEffect(() => {
        if (SearchData.length < 3 && isOpen) {
            setOpen(false)
            return
        }

    }, [SearchData])

    return ( <> <Box
        sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'flex-end'
    }}>

        <SearchInput
            setOpen={setOpen}
            SearchData={SearchData}
            isOpen={isOpen}
            setSearchData={setSearchData}/>

        <MobileSearchMenu query={query} isOpen={isOpen} setQuery={setQuery} setOpen={setOpen}/>

    </Box>
     </>)
}


export default SearchBar