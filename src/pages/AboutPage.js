import React, { useState } from "react"
import About from "../components/About"
import { motion } from "framer-motion"
import { PageAnim, LineAnim } from "../animation"
import styled from "styled-components"
import Safety from "../components/Safety"
import Card from "../components/Card"
import FishCard from "../components/FishCard"
const AboutPage = () => {
    const [add, setAdd] = useState(false)
    const [fishAdd, setFishAdd] = useState(false)
    return (
        <motion.div variants={PageAnim} initial="hidden" animate="show">
            {add ? <Card setAdd={setAdd} /> : ""}
            {fishAdd ? <FishCard setFishAdd={setFishAdd} /> : ""}
            <About />
            <Line variants={LineAnim} />
            <Safety setFishAdd={setFishAdd} setAdd={setAdd} />
        </motion.div>
    )
}
const Line = styled(motion.div)`
width:100%;
height:3px;
background-color:darkblue;
margin-top:1rem;
`
export default AboutPage