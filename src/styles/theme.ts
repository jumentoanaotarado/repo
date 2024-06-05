import {extendTheme} from '@chakra-ui/react'
import { color } from 'framer-motion'


export const theme = extendTheme({
    colors:{
        gray:{
         
        }
    },
    
    styles:{
        global:{
            body:{
                bg: 'gray.900',
                color:'gray.50'
                 
            }
        }
    },

    fonts:{
        heading: 'Roboto',
        body: 'Roboto'
    }

})