import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { PageAnim } from "../animation"
import * as _ from "lodash"
const Final = ({ score, setTest }) => {
  const [div, setDiv] = useState(false)
  const sum = _.sum(score)
  return (
    <Main variants={PageAnim}>
      <div style={{ display: "flex" }}>
        <svg onClick={() => setDiv(prev => !prev)} viewBox="0 0 36 36" className="circular-chart">
          <motion.path className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path className="circle"
            strokeDasharray={`${Math.floor(sum * 100 / 5)}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">{Math.floor(sum * 100 / 5)}%</text>
        </svg>
        {div && <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}  >{sum}/5</motion.h1>}
        {sum === 5 && (<Message><h2>Вы молодец!</h2>
          <p>Все задания выполнены верно! Мы надеемся, что наш сайт помог вам обезопасить себя в социальных сетях и не только, и желаем вам всего наилучшего! </p></Message>)}
        {(sum === 4 || sum === 3) && (<Message><h2>Вы все еще молодец!</h2><p>Хоть и не все задания выполнены верно, но вы старались, поэтому поздравляем вас с достигнутым!</p></Message>)}
        {(sum === 2 || sum === 1 || sum === 0) && (<Message><h2>Не стоит расстраиваться!</h2><p>Но следует еще раз почитать наш сайт, чтобы запомнить обо всех правилах безопасности!</p></Message>)}</div>
      <Button onClick={() => setTest([0])}>Завершить</Button>
    </Main>
  )
}
const Main = styled(motion.div)`
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
h1{
  margin:0;
  padding:2rem 0 0 2rem;
  font-size:3.8rem;
  display:block;
}
svg{
  margin:1rem;
  padding:0;
}
width:90%;
margin-top:3rem;
margin-left:3rem;
.circular-chart {
  transition:transform 0.3s ease;
  cursor:pointer;
  &:hover{
    transform:scale(1.3);
  }
  display: block;
  max-width: 100px;
  max-height: 100px;
}

.circle-bg {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
}

.percentage {
  fill: #50c690;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.5rem;
  text-anchor: middle;
}

.circle {
  fill: none;
  stroke-width: 1;
  stroke: #50c690;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}
`
const Button = styled.button`
margin:3rem 3rem 3rem 2rem;

box-shadow:0px 5px 30px rgba(0,0,0,0.2);
cursor:pointer;
width:10rem;
height:2rem;
border-radius:20%;
border:none;
background-color:white;
color:black;
transition: background-color 0.3s ease, color 0.3s ease;
&:hover{
  background-color:darkblue;
  color:white;
}
`
const Message = styled.div`
position:absolute;
width:50%;
margin-left:30%;
h2{
  margin-top:2rem;
  padding:0;
  text-align:center;
}
p{height:3rem;
text-align:center;
padding:2rem;
font-size:1.25rem;}
`

export default Final