import { motion, useScroll } from "framer-motion"
import {useRef} from "react";

function Component() {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null)

    return     <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
        />
        asssssssss
    </div>
}
export default Component