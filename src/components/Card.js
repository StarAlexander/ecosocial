import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import whale2 from "../img/whale2.jpeg"
import whale3 from "../img/whale3.jpg"
import { fade } from "../animation"
const Card = ({ setAdd }) => {
    return (
        <Main variants={fade}>

            <CardStyle>

                <div className="info">
                    <p>Образ кита, предположительно, позаимствован из песни «Гореть» группы Lumen и означает одиночество и отчуждённость. Возможно, этимология названия также связана с таким феноменом, как массовое выбрасывание китообразных на берег. Когда кит попадает в беду, он издаёт сигнал бедствия, услышав который сородичи устремляются ему на помощь. Описанная стратегия выживания прекрасно работает в открытом океане, но не на мелководье, когда пострадавший кит притягивает к себе и других китов, провоцируя массовую гибель животных. Схожий принцип может быть заложен и в игру «Синий кит»: подростки, находящиеся в трудной жизненной ситуации, сигнализируют об этом: публикуют в социальных сетях принятые в игре хештеги, — но вместо того чтобы спастись, все они могут погибнуть.</p>
                    <img src={whale2} alt="whale" />
                    <p>Интерес к таким играм подогревается еще тем, что достаточно сложно вступить в смертельную группу. Необходимо свое желание доказать конкретным действием, например, причинить себе изобретательно легкие телесные повреждения. Фанаты данных групп сравнивают себя с китами. Эти животные ассоциируются у них со свободой. Данный вид млекопитающих – это один из немногих, который добровольно сводит счеты с жизнью и именно поэтому у всех сторонников «тихих домов» и «моря китов» в личных страницах можно увидеть видео с летающими китами под зомбирующие звуки.</p>
                    <img src={whale3} alt="whale" />
                </div>

                <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faXmark} onClick={() => setAdd(prev => !prev)} className="icon" size="2x" />
            </CardStyle>
        </Main>
    )
}

const Main = styled(motion.div)`
min-height:100vh;
width:100%;
overflow-y:scroll;
background:rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
z-index:10;
&::-webkit-scrollbar{
    width:0.5rem;
}
&::-webkit-scrollbar-thumb{
   background-color:#ff7676;
}
&::-webkit-scrollbar-track{
    background:white;
}
`
const CardStyle = styled.div`
width:80%;
border-radius:1rem;
padding:2rem;
background:white;
position:absolute;
left:10%;
color:black;
top:10%;
display:flex;
justify-content:space-between;
img{
    width:90%;
    margin:1rem;
    box-shadow:0 5px 30px rgba(0,0,0,0.2);
}
`
export default Card