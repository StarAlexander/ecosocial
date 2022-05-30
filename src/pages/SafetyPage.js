import React, { useState } from "react";
import styled, { css } from "styled-components";
import thief from "../img/thief.png"
import { motion } from "framer-motion";
import { imgAnim } from "../animation";
import { hAnim } from "../animation";
import { LineAnim } from "../animation";
import Wave from "../components/Wave";
import Final from "../components/Final";
import instagram from "../img/instagram.png"
import telegram from "../img/telegram.png"
import facebook from "../img/facebook.png"
import whale from "../img/whale.jpg"
import * as _ from "lodash"
let score = []
const SafetyPage = () => {
  const [out, setOut] = useState(true)
  const [test, setTest] = useState([0])
  const buttonHandler = (name, score) => {
    const checked = document.querySelector(`input[name=${name}]:checked`)
    const inputScore = checked.dataset.value
    score.push(parseInt(inputScore))
  }
  return (
    <Main className="safe" variants={imgAnim} initial="hidden" animate="show">
      <motion.div className="header" style={{ display: "flex" }}>
        <Img variants={imgAnim} > <img src={thief} alt="thief" /></Img>
        <Hes className="hes" variants={imgAnim}>
          <motion.h1 variants={hAnim}>Правила</motion.h1>
          <motion.h1 variants={imgAnim}>Поведения</motion.h1>
          <motion.h1 variants={hAnim}>В социальных сетях</motion.h1>
        </Hes></motion.div>
      <Line variants={LineAnim} />
      {_.isEqual(test, [0]) && <Button onClick={() => { score = []; setTest([1, 0, 0, 0, 0]) }}>пройти тест</Button>}
      {!!test[0] && (<Test className="test" test={test}>
        <div className="question">
          <Line variants={LineAnim} />
          <p className="quest">1) Вам пришло  сообщение о выигрыше в лотерею. Чтобы получить приз,<br></br> нужно оплатить его доставку. Как вы поступите?</p>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r1" id="Answer" data-value='0' /><p>Оплачу доставку и буду ждать приз.</p></div>
          <div className="answer"><input onChange={() => setOut(false)} type="radio" name="r1" id="Answer" data-value='0' /><p>Свяжусь с отправившим, чтобы узнать, можно ли самому приехать и забрать приз.</p></div>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r1" id="Answer" data-value='1' /><p> Проигнорирую письмо, так как ничего не знаю об этой лотерее.</p></div>
          <Button disabled={out} onClick={() => { buttonHandler("r1", score); setOut(true); setTest([0, 1, 0, 0, 0, 0]) }}>Далее</Button>

        </div>
      </Test>)}
      {!!test[1] && (<Test test={test}>
        <div className="question">
          <Line variants={LineAnim} />
          <p className="quest">2)Вы договорились с продавцом  смартфонов по сети Вконтакте. Как определить, что этому продавцу можно доверять?</p>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r2" id="Answer" data-value='1' /><p>Проверить страницу продавца на подлинность.</p></div>
          <div className="answer"><input onChange={() => setOut(false)} type="radio" name="r2" id="Answer" data-value='0' /><p>Попросить продавца рассказать о своих прошлых продажах.</p></div>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r2" id="Answer" data-value='0' /><p>Довериться продавцу на слово.</p></div>
          <Button disabled={out} onClick={() => { buttonHandler("r2", score); setOut(true); setTest([0, 0, 1, 0, 0, 0]) }}>Далее</Button>

        </div>
      </Test>)}
      {!!test[2] && (<Test test={test}>
        <div className="question">
          <Line variants={LineAnim} />
          <p className="quest">3)Что нельзя сообщать другим о своей банковской карте?</p>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r3" id="Answer" data-value='0' /><p>Имя владельца карты.</p></div>
          <div className="answer"><input onChange={() => setOut(false)} type="radio" name="r3" id="Answer" data-value='1' /><p>Три цифры на обратной стороне карты (CVC-код). </p></div>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r3" id="Answer" data-value='0' /><p>Последние четыре цифры номера карты.</p></div>
          <Button disabled={out} onClick={() => { buttonHandler("r3", score); setOut(true); setTest([0, 0, 0, 1, 0, 0]) }}>Далее</Button>

        </div>
      </Test>)}
      {!!test[3] && (<Test test={test}>
        <div className="question">
          <Line variants={LineAnim} />
          <p className="quest">4) Что нельзя делать со своим паролем от электронного кошелька?</p>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r4" id="Answer" data-value='1' /><p>Сообщать пароль другим людям, даже сотрудникам службы поддержки платежного сервиса.</p></div>
          <div className="answer"><input onChange={() => setOut(false)} type="radio" name="r4" id="Answer" data-value='0' /><p>Часто менять пароль. </p></div>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r4" id="Answer" data-value='0' /><p>Задавать более простой пароль, чем установлен сейчас.</p></div>
          <Button disabled={out} onClick={() => { buttonHandler("r4", score); setOut(true); setTest([0, 0, 0, 0, 1, 0]) }}>Далее</Button>

        </div>
      </Test>)}
      {!!test[4] && (<Test test={test}>
        <div className="question">
          <Line variants={LineAnim} />
          <p className="quest">5) Проверяете ли вы важную информацию, которую читаете в социальных сетях?</p>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r5" id="Answer" data-value='0' /><p>Нет, я доверяю тому, что пишут.</p></div>
          <div className="answer"><input onChange={() => setOut(false)} type="radio" name="r5" id="Answer" data-value='0' /><p>Проверяю, только если информация действительно важная. </p></div>
          <div className="answer"> <input onChange={() => setOut(false)} type="radio" name="r5" id="Answer" data-value='1' /><p>Всегда проверяю и желательно в нескольких источниках.</p></div>
          <Button disabled={out} onClick={() => { buttonHandler("r5", score); console.log(score); setOut(true); setTest([0, 0, 0, 0, 0, 1]) }}>Завершить</Button>

        </div>
      </Test>)}
      {!!test[5] && <Final setTest={setTest} score={score} />}
      <Info><h1>Мошенничество в Instagram</h1>
        <div className="message">Хотя мошенничество со знаменитостями в Instagram часто остается незамеченным, данный вид мошенничества является одним из самых дорогостоящих в Интернете. В отличие от большинства киберпреступников, имеющих дело с небольшими суммами денег, данный тип мошенничества – обычно хорошо организованный, способен нанести жертвам серьезный ущерб.

          Мошенники создают фан-страницы для популярных знаменитостей и платят, чтобы получить сотни тысяч поддельных подписчиков. Таким образом, они создают подобие легитимности фан-страницы.

          Наиболее популярными среди мошенников являются фан-страницы  знаменитостей Голливуда. В некоторых случаях киберпреступники создают поддельные фан-страницы популярных музыкантов.

          Мошенники тщательно изучают комментарии к сообщениям фейковых знаменитостей и намечают круг потенциальных жертв. Затем самые фанатичные поклонники и люди, желающие встретиться с этими знаменитостями, получают личные сообщения.

          Жертвам предлагается возможность либо встретиться, либо совершить какую-либо сделку с фейковой знаменитостью.<br></br>Ниже приведены несколько простых вещей, которые следует сделать, чтобы избежать такого рода мошенничества:
        </div>
        <Rules className="white"><img src={instagram} alt="inst" />
          <ul>
            <li>Имейте дело с проверенными страницами знаменитостей.</li>
            <li>В случае непроверенных учетных записей, избегайте тех, которые настаивают на оплате.</li>
            <li>Помните, что большинство из подобных предложений являются мошенничеством.</li></ul></Rules>
      </Info>
      <Info>
        <h1>Мошенничество в Telegram</h1><div className="message">
          Мошенничество с криптовалютой Telegram - фиктивная схема майнинга криптовалюты, осуществляемая в группах Telegram. Как и в других случаях мошенничества в соцсетях, злоумышленники используют огромное количество участников для подделки легитимности группы.

          Группы Telegram, используемые для такого рода мошенничества, обычно заполнены фиктивными учетными записями и случайными участниками. Мошенники управляют десятками фальшивых аккаунтов, с помощью которых делятся фальшивыми доказательствами и свидетельствами огромных доходов, которые они якобы заработали.
          Киберпреступники, использующие подобную тактику мошенничества, обычно имеют профессиональный веб-сайт для своих операций. злоумышленники просят жертв использовать только их официальный сайт и предостерегают от транзакций с неофициальными организациями в Telegram. Конечно, это всего лишь часть изощренного плана мошенников по убеждению пользователей в полной законности происходящего.

          Дополнительную эффективность преступному плану придает анонимность, которую предлагает и криптовалюта, и Telegram. Жертвы ничего не могут сделать, после того, как их обобрали.<br></br> Тактика киберпреступников имеет несколько вариаций. Однако, независимо от того, какой вариант использует мошенник, в схеме обычно присутствуют три основных признака:
          <ul>
            <li>Поддельные доказательства, включающие отзывы.</li>
            <li> Множество неактивных участников.</li>
            <li> Множество неактивных участников.</li></ul>
          Сообщения в группе в основном отправляются одними и теми же учетными записями.
          Обманывая ничего не подозревающих членов группы Telegram, мошенники просят их вложить средства в операцию по добыче криптовалюты. Это может быть оплата «установки для майнинга криптовалюты» или другого инструмента, который, по утверждению мошенников, будет использоваться для добычи криптовалюты. После совершения платежа жертву выгоняют из группы или используют другие средства, чтобы выманить у нее еще больше денег.

          В некоторых случаях после осуществления платежа, мошенники дают жертвам что-то взамен. Таким образом киберпреступники пытаются втереться в доверие, чтобы в долгосрочной перспективе получить от жертв как можно больше денег.
          <br></br>Ниже приведены несколько простых вещей, которые следует сделать, чтобы избежать такого рода мошенничества:
        </div>
        <Rules className="white"><img src={telegram} alt="telegram" /><ul><li>совершайте сделки только с авторитетными криптовалютными компаниями.
        </li><li>игнорируйте сообщения с просьбой заплатить за защиту инструмента для добычи криптовалюты.</li>
        </ul></Rules>
      </Info>
      <Info><h1>Фишинг в Facebook</h1><div className="message">Типичная фишинговая атака в Facebook начинается с сообщения или ссылки, в которой вас просят предоставить или подтвердить ваши персональные данные. Поскольку эти сообщения доставляются почтой Facebook или через Facebook Messenger, часто трудно отличить легитимное дружеское послание от попытки фишинга.

        Информация, собранная в результате фишинговых атак, дает злоумышленникам доступ к аккаунтам Facebook. Вы можете получить сообщение о том, что существует проблема с вашей учетной записью Facebook и что вам необходимо войти в систему, чтобы исправить эту проблему.

        Нажав на ссылку в сообщении, вы попадете на сайт, имитирующий Facebook. Там вам сразу будет предложено ввести логин и пароль для входа. Таким образом злоумышленники получают ваши учетные данные. </div><Rules><img src={facebook} alt="facebook" /><p>Внимательно изучите URL-адрес, чтобы быть уверенным, что будете перенаправлены на www.facebook.com. Любой отличающийся адрес будет фальшивым. Не переходите по незнакомым ссылкам. Не подтверждайте свои персональные данные. Принимайте запросы на добавление в друзья только от тех, кого знаете лично.</p></Rules></Info>
      <Info><h1>Синий кит</h1><div className="message">Чтобы быть принятым в игру «Синий кит» или получить первое задание, подростки в одну из групп смерти отправляют сообщение с хештегами «#разбуди меня в 4.20» или «#хочу в игру», гораздо реже «#жду инструкцию».Первые задания у подростков вызывают интерес и любопытство. Казалось бы, вначале игры – это безобидная картинка на руке, тогда как в конце – последний в жизни шаг. Организаторы-преступники постоянно придумывают новые ухищрения, чтобы заманить к себе подростков. Участвовать в игре подобного плана, подростковую личность толкает одиночество и плохие взаимоотношения с близкими, но ни один ребенок не желает смерти своему родителю, поэтому боится выйти самостоятельно из игры «Синий кит». Детей запугивали, что умрут их близкие вместо них. Не имея жизненного опыта, дети в это верили. <br></br> Как уберечь ребенка от опасности:</div>
        <Rules className="white"><img src={whale} alt="whale" /><p>Необходимо объяснить подростку, что все великие люди проходили через депрессию, боль, разочарование, но это их не убивало, а делало сильнее. Никто не вправе распоряжаться чужой судьбой, только сам человек является хозяином и сценаристом своей жизни. Следует помочь ребенку поверить, что он живет не напрасно, а боль и разочарования – это всего лишь временные явления в жизни. И никто не вправе играть на человеческих слабостях, толкая человека в ад, где уже ничего нельзя исправить.</p></Rules>
      </Info>
      <Info><div className="message">Чтобы уберечь детей от игры «Синий кит» родители должны понимать, что для подросткового периода характерно падение родительского авторитета, появление новых кумиров, возникновение психологических проблем, связанных с неразделенной любовью. Зная это, необходимо эмоционально всегда поддерживать подростка и принимать его таким, какой он есть. Именно подростки с нестабильной психикой становятся жертвой влияния манипуляторов в интернете.</div></Info>
      <Wave />
    </Main>
  )
}
const Main = styled(motion.div)`
margin-top:10vh;
h2{
  padding-bottom:1rem;
}
h1{
    padding-top:5rem;

}
`
const Img = styled(motion.div)`
margin-top:1rem;

`
const Hes = styled(motion.div)`
width:50%;
padding-left:3rem;
`
const Line = styled(motion.div)`
width:100%;
height:3px;
background-color:darkblue;
margin-top:1rem;
`

const Button = styled.button`
position:absolute;
left:40%;
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
cursor:pointer;
width:10rem;
height:2rem;
margin:1rem;
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

const Test = styled.div`
${props => !props.test && css`
&{
  display:hidden;
}`}
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
width:90%;
margin-top:3rem;
margin-left:3rem;
.question{
  width:100%;
  height:50vh;
  font-size:1.5rem;
  div[class=answer]{
    display:flex;
    width:100%;
    padding-left:7rem;
    transition:background-color 0.3s ease;
    &:hover{
      background-color:lightgrey;
    }
    
  }
}
input{
  margin:1.2rem;
  cursor:pointer;
  &:hover{
    filter:brightness(100%);
  }
}
p{
  padding-top:1rem;
}
p[class=quest]{
  margin-left:19%;
}
`
const Info = styled.div`
margin-top:5rem;
width:100%;
h1{
  padding-left:5rem;
}
.message{
  width:80%;
  margin-top:1rem;
  li{
    margin:1rem;
  }
margin-left:5%;
  font-size:1.5rem;
}
`
const Rules = styled.div`
p{
  margin-top:1rem;
  font-size:1.4rem;
}
width:90%;
margin:2rem;
box-shadow:0 5px 30px rgba(0,0,0,0.2);
display:flex;
ul{
  margin:2rem;
  font-size:1.5rem;
  li{
    padding:0.8rem;
  }
}
img{
  width:20%;
  margin:1rem;
  transition:transform 0.3s ease;
  &:hover{
    transform:scale(0.9);
  }
}

`
export default SafetyPage