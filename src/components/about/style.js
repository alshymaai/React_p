import Styled from 'styled-components'
export const AboutSection=Styled.div`
    height: 500px;
    background: url('../images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px){
        height: auto; 
    }
`
export const AboutInfo=Styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:991px){
        width: 100%;
        padding-top: 10px;
        float: none; 
    }

` 
export const InfoTitle=Styled.h2`
font-weight: bold;
font-size: 50px;
margin:10px 0;
`
export const Span=Styled.span`
font-weight: normal;
`
export const InfoDir=Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    margin-top:10px;
    @media (max-width:991px){
        font-size: 30px;  
    }
`
export const InfoDec=Styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`
export const Anchor=Styled.a`
text-decoration: none;
`