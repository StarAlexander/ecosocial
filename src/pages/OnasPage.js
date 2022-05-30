import React from "react";
import styled from "styled-components";
import { PageAnim, Slider, SliderContainer, PhotoAnim } from "../animation"
import mtkp from "../img/mtkp.png"
import mtkpBuild from "../img/mtkp_build.jpg"
import mtkpVid from "../img/mtkp_vid.jpg"
import { motion } from "framer-motion";
import Wave from "../components/Wave"
const OnasPage = () => {
    return (
        <Onas variants={PageAnim} exit="exit" initial="hidden" animate="show">
            <motion.div variants={SliderContainer}>
                <Frame1 variants={Slider} />
                <Frame2 variants={Slider} />
                <Frame3 variants={Slider} />
            </motion.div>
            <div style={{ display: "flex" }}>
                <motion.img style={{ width: "25%", marginTop: "4rem", marginLeft: "1rem" }} variants={PhotoAnim} src={mtkpBuild} alt="mtkp" />
                <Info><motion.img src={mtkp} alt="mtkp" />
                    <Text>
                        <p>Над сайтом работали студенты Московского техникума космического приборостроения при Московском государственном техническом институте имени Н.Э.Баумана:</p>
                        <ul>
                            <li>
                                <h2>Старченко Александр</h2>
                                <p>Главный программист</p>
                            </li>
                            <li>
                                <h2>Дюрягина Ирина</h2>
                                <p>Дизайнер</p>
                            </li>
                        </ul>
                    </Text>
                </Info>
                <motion.img variants={PhotoAnim} style={{ width: "25%", margin: "3rem" }} src={mtkpVid} alt="mtkp" /></div>
            <Wave /></Onas>
    )
}
const Onas = styled(motion.div)`
margin-top:10vh;
img{
    box-shadow:0px 5px 30px rgba(0,0,0,0.1);
    border-radius:0;
}
`
const Frame1 = styled(motion.div)`
position:fixed;
left:0;
top:10vh;
width:100%;
height:100vh;
background:#fffebf;
z-index:2;
`
const Frame2 = styled(Frame1)`
background:coral;
`
const Frame3 = styled(Frame1)`
background:rgb(34, 51, 68);
`
const Info = styled.div`
    margin-top:15vh;
    margin-left:10%;
    img{
        width:30%;
        margin-bottom:2rem;
        margin-left:3rem;
    }


`
const Text = styled.div`
p{
    font-size:1.3rem;
}
position:absolute;
padding-left:5rem;
width:40%;
left:25%;
li{
    p{
        padding-left:2rem;
        padding-bottom:3rem;
        display:none;
        
    }
    &:hover{
        p{
            display:block;
        }
    }

    transition:all 0.3s ease;
    &:hover{
         box-shadow:0px 5px 30px rgba(0,0,0,0.1);
    }
}
h2{
    padding:2rem;
}
`
export default OnasPage