import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
h2{
    padding-left:3rem;
    padding-top:5rem;
}
body{
    overflow:scroll;
    background-color:"#fff";
    font-weight:400;
    font-family: "Noto Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    transition:background-color 0.1s linear;
    overflow:auto;
    img{
        border-radius:10%;
    }
}
*{
    transition: color 0.25s ease;
    margin:0;
    padding:0;
    font:oblique;
    box-sizing:border-box;
    

}
a{
    cursor:pointer;
}
@media screen and (max-width: 1280px) { div.contentblock {width: 1200px;};
object-fit:cover;
img{
    width:70%;
};
.info{
    display: block;
    img{
        margin-left:5rem;
    }
};
.h2{
    margin-right:7rem;
};
.test{
    min-height:90vh;
}  } @media screen and (max-width: 1140px) { div.contentblock {width: 1024px;};
object-fit:cover;
img{
    width:70%;
};
.info{
    display: block;
    img{
        margin-left:5rem;
    }
};
.h2{
    margin-right:7rem;
};
.test{
    min-height:90vh;
}  } @media screen and (max-width: 992px) { div.contentblock {width: 970px;};
img{
    object-fit:cover;
    width:70%;
};
.info{
    display: block;
    img{
        margin-left:5rem;
    }
};
.h2{
    margin-right:7rem;
};
.test{
    min-height:90vh;
} }
`