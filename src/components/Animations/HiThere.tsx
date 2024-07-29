import React, {useRef} from "react";
import { motion } from "framer-motion";

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay
}

export const HiThere = ({children, width = "fit-content",delay = 0} : Props) =>{
    const ref = useRef(null);


    return(
        <div ref={ref} style={{ position:"relative", width, overflow: "hidden"}}>
            <motion.div
                whileHover={{
                    scale: [1.2, 1.2, 1.2, 1.2, 1],
                    rotate: [0, -20, 20, 0, 0],                
                }}
                
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                >
                {children}
                </motion.div>
        </div>
    );
};