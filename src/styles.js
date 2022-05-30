import styled from "styled-components";

export const Info = styled.div`
padding-top:3rem;
padding-left:3rem;
justify-content:space-between;
div{
  font-size:1.4rem;
}
p{
  font-size:1.5rem;
}
img{
    margin-left:20rem;
    object-fit:cover;
    height:30rem;
}
.single-chart{
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
height:40rem;
width:18rem;
margin-top:1rem;
}
.circular-chart {
  display: block;
  margin-left:5rem;
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
  /* stroke-linecap: round; */
  stroke: #50c690;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}
`
export const AboutStyle = styled.div`
padding:0;
min-height:90vh;
h2{
  font-size:2.5rem;
}
h2{
    margin-top:3rem;
}
a{
    cursor:pointer;
    color:darkblue;
}

`
