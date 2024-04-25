import React from 'react'
import { motion } from 'framer-motion'
const gestures = () => {
    return (
        <div style={{ display: "grid", placeContent: "center", height: "100vh", gap: "0.8rem" }} className='bg-gray-400'>

            <motion.button className='h-10 w-60'

                whileHover={{ scale: '1.5' }}
                whileTap={{ scale: 0.95, rotate: '25deg' }}
                transition={{ ease: "easeInOut", duration: '0.125' }}
            >

                hellow
            </motion.button>
            <motion.button className='h-10 w-60 bg-red-500'

                whileHover={{ scale: '1.5' }}
                whileTap={{ scale: 0.95, rotate: '25deg' }}
                transition={{ ease: "easeInOut", duration: '0.5' }}
            >

                hellow
            </motion.button>




        </div>
    )
}

export default gestures