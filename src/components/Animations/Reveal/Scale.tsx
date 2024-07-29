import React, {useEffect,useRef} from "react";
import { motion, useInView,useAnimation } from "framer-motion";

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay
}

export const Scale = ({children, width = "fit-content",delay = 0} : Props) =>{
    const ref = useRef(null);

    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();
    
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])
    return(
        <div ref={ref} style={{ position:"relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden:{scale:0},
                    visible:{scale:1}
                }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: delay}}
                >
                {children}
                </motion.div>
        </div>
    );
};