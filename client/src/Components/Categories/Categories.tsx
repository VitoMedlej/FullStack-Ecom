import Box from '@mui/material/Box';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import CateCard from './CateCard'
const shoes = require('../../Helpers/Images/shoes.jfif')
const accessories = require('../../Helpers/Images/accessories.jfif')
const suits = require('../../Helpers/Images/suits.jfif')

const CateArray = [
    {link:'/shoes',id:1,title:'shoes',desc:'Only High Quality Shoes' ,img : shoes},
    {link:'/Suits',id:2,title:'Suits',desc:'Only High Quality Suits' ,img : suits},
    {link:'/accessories',id:3,title:'accessories',desc:'Only High Quality accessories' ,img : accessories},

]
const Categories = () => {
    
    return (
        <Box>
            <CBox  className='limit'>
                <CTypo
                    fontWeight='500'
                    sx={{
                    pt: '5em'
                }}
                    fontSize={{
                    xs: '1.2em',
                    sm: '1.4em',
                    md: '1.5em'
                }}
                    text='Categories'></CTypo>
            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>

            {CateArray && CateArray.map(item=> {
               return <CateCard key={item.id} link={item.link} title={item.title} desc={item.desc} img={item.img} />
              
            })}
                
                
           
            </Box>
            </CBox>
        </Box>
    )
}

export default Categories