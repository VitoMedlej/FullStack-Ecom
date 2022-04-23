import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'
import {useState, useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const ScrollToTopButton = () => {
  gsap.registerPlugin(ScrollToPlugin);

    const [ShowTopBtn,
        setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <Box
            sx={{
            display: `${ShowTopBtn
                ? 'block'
                : 'none'}`
        }}
            className='ScrollToTopButton'>

            <IconButton
                onClick={() => gsap.to(window, {
                duration: .86,
                scrollTo: "#top"
            })}>

                <ArrowCircleUpIcon/>
            </IconButton>
        </Box>
    )
}

export default ScrollToTopButton