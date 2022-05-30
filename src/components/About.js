import React from "react"
import { Info, AboutStyle } from "../styles"
import { motion } from "framer-motion"
import { TitleAnim, PhotoAnim } from "../animation"
import thief from "../img/thief.gif"
const About = () => {
    return (
        <AboutStyle>
            <motion.h2 className="h2" style={{ marginLeft: "13rem" }} variants={TitleAnim}>Возьми заботу о безопасности в свои руки</motion.h2>
            <Info className="info">


                <motion.img variants={PhotoAnim} src={thief} alt="img" />
                <motion.div variants={TitleAnim}><strong>Мошенничество в социальных сетях</strong>, на наш взгляд, может осуществляться по двум путям: это, во-первых, обман либо злоупотребление доверием, направленные непосредственно на завладение чужими средствами, во-вторых, обман либо злоупотребление доверием, направленные на завладение персональными данными, с помощью которых также осуществляется дальнейшее завладе-

                    ние чужими деньгами. Второй путь мы считаем более опасным, так как обладание личными данными сможет обеспечить неоднократность совершения противоправных действий в отношении жертвы.
                </motion.div>


            </Info>

        </AboutStyle>
    )
}


export default About