import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const basicofMotion = () => {
    const [isvisible, setIsVisible] = useState(true)

    return (
        <div style={
            {

                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"

            }
        } className='bg-gray-400'>

            <motion.button  layout onClick={() => { setIsVisible(!isvisible) }}> close me </motion.button>
            <AnimatePresence mode="popLayout">

                {isvisible &&
                    <motion.div

                    
                        initial={{
                            rotate: '0deg',
                            scale: 0
                        }}
                        animate={{
                            rotate: "180deg",
                            scale: 1
                        }}
                        transition={{
                            duration: "1",
                            ease: 'linear'
                        }}
                        exit={{
                            rotate: "0deg",
                            scale: 0
                        }}


                        className='bg-black w-40 h-40'>






                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}

export default basicofMotion