import Box from "@mui/material/Box"
import CBox from "../../../../Components/CustomMui/CBox"
import CTypo from "../../../../Components/CustomMui/CTypo"

const About = () => {
    return (
        <CBox sx={{
            pt: '2em'
        }}>
            
            <CTypo text='Main Section' fontSize={{xs:'1.2em',sm:'1.4em'}} fontWeight='500' sx={{mt:0}}/>
       
        <Box
            sx={{
            background: 'white',
            width: '100%',
            mt: '2em',
            py: '1em',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        }}>
        
            <CBox>
                <CTypo
                    fontWeight="500"
                    fontSize={{
                    xs: '1.2em'
                }}
                    text='About This Board'/>
                <CTypo
                    color='#515151'
                    fontWeight="300"
                    text={`I've created this dashboard/admin panel ,Call it whatever you'd like ,Just for me. But why make it public? Well ,I needed a way to make dummy data without writing json manually since it would take years and it's not conventinal now is it?. I could've made an ugly looking platform for personal use but I decided to make this good looking dashboard instead :D, Note that you can neither read nor write data but only view the products. `}/>
            </CBox>
        </Box>
        </CBox>
    )
}

export default About