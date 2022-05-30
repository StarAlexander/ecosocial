import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import fishing1 from "../img/fishing1.jpg"
import { fade } from "../animation"
const FishCard = ({ setFishAdd }) => {
	return (
		<Main variants={fade}>

			<CardStyle>

				<div className="info">
					<p>Термин «фишинг» появился в 1996 году в новостной группе alt.online-service.America-Online сети Usenet. Первые упоминания о фишерах связаны с медийной компанией AOL, когда мошенники представлялись сотрудниками AOL, обращались к пользователям через программы мгновенного обмена сообщениями и от лица сотрудников компании просили предоставить им пароли от аккаунта. Получив доступ к аккаунту, его использовали для рассылки спама.

						В начале 2000-х годов фишинг распространился на платежные системы, а в 2006 году фишинговой атаке подверглись пользователи социальной сети MySpace, в результате были украдены регистрационные данные.</p>
					<p>Фишинг в социальных сетях — это атака, которая осуществляется с использованием Instagram, LinkedIn, Facebook, Twitter и других платформ. Цель атаки — украсть ваши персональные данные и завладеть вашей учетной записью в социальной сети.</p>
					<img src={fishing1} alt="fishing" />
				</div>

				<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faXmark} onClick={() => setFishAdd(prev => !prev)} className="icon" size="2x" />
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
export default FishCard