import React from 'react'
import { useAnimationControls, motion } from 'framer-motion'


const animationControl = () => {

    const animationControl = useAnimationControls();

    const handleClick = () => {

        animationControl.start("flipa")
    }

    return (
        <div style={{ display: "grid", placeContent: "center", height: "100vh", gap: "0.8rem" }} className='bg-gray-400'>

            <button onClick={handleClick} className='bg-blue-500 h-4- w-120'>Flip it</button>
            <motion.div className='h-60 w-60 bg-black'

                variants={{
                    initial: {
                        rotate: "0deg"
                    },
                    flipa: {
                        rotate: "60deg"
                    }
                }}
                initial="initial"
                animate={animationControl}


            >

            </motion.div>

        </div>
    )
}

export default animationControl