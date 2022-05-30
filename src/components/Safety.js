import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
import { Link } from "react-router-dom"
import whale from "../img/scale_1200.jpg"
import fishing from "../img/fishing.jpg"


const Safety = ({ setFishAdd, setAdd }) => {
    return (
        <Main variants={fade}>
            <Info>
                <h1>Что нужно знать о <Link to="/safety">безопасности</Link> в соцсетях</h1>
            </Info>
            <Header>
                <h2>"Синий кит"</h2>
            </Header>
            <Information className="white" onClick={() => { setAdd(prev => !prev) }}>
                <p>Синий кит (а также «Тихий дом», «Разбуди меня в 4:20», «Море китов», «Млечный путь», «U19», «F57») — российская городская легенда о существовании в социальных сетях некой игры, в которую играют дети и подростки и финальной целью которой является совершение самоубийства. Информация о существовании такой игры была опубликована в «Новой газете» 16 мая 2016 года Галиной Мурсалиевой, широко растиражирована СМИ и стала причиной моральной паники среди населения России. Факт существования данной игры не подтверждён до сих пор.</p>
                <img src={whale} alt="whale" />
            </Information>
            <Header>
                <h2>Фишинговые сайты</h2>
            </Header>
            <Information className="white" onClick={() => setFishAdd(prev => !prev)}>
                <p>Фишинг —  вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей — логинам и паролям.Это достигается путём проведения массовых рассылок электронных писем от имени популярных брендов, а также личных сообщений внутри различных сервисов, например, от имени банков или внутри социальных сетей. </p>
                <img src={fishing} alt="fishing" />
            </Information>

        </Main>
    )
}
const Main = styled(motion.div)`
min-height:90vh;
padding:1.5rem;
  h1{
      padding-top:3rem;
  }
  h2{
      padding-bottom:2rem;
  }
`
const Info = styled(motion.div)`
padding-bottom:3rem;
a{
    text-decoration:none;
}
`
const Header = styled.div`
border:3px;
h2{
    font-size:2.5rem;
    left:3rem;
    border:3px;
}
`
const Information = styled.div`
transition:transform 0.3s ease;
&:hover{
   transform:translateY(2%);
}
padding-top:2rem;
font-size:1.25rem;
cursor:pointer;
display:flex;
p{
    padding-left:0.5rem;
}
img{
    width:50%;
    padding:0.5rem;
   
}
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
`
export default Safety