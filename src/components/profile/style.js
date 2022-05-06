import Styled from 'styled-components'
export const ProfileSkills=Styled.div`
padding: 50px 0;
overflow: hidden;
`
export const ProfileSection=Styled.div`
width: 50%;
float: left;
@media (max-width:768px){
    width: 100%;
    float: none;
    margin-bottom: 20px;   
}
`
export const ProfileList=Styled.ul`
list-style: none;
`
export const ProfileItem=Styled.li`
margin-bottom: 8px;
`
export const ProfileItemSpan=Styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
`
export const SpanWeb=Styled.span`
font-weight: normal;
 color: #eb5424;
`
export const Skills=Styled.div`
width: 50%;
float: left;
@media (max-width:768px) {
    width: 100%;
    float: none;
}
`
export const SkillsDesc=Styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`
export const SkillsBar=Styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px;
`
export const BarTitle=Styled.span`
float: left;
`
export const BarPerc=Styled.span`
float: right;
margin-right: 100px;
`
export const BarParent=Styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`
export const ParentSpan=Styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props=>props.sp===1?'100%':''}
${props=>props.sp===2?'90%':''}
${props=>props.sp===3?'80%':''}
`
export const ProfileTitle=Styled.h2`
font-size: 40px; 
margin-bottom: 20px;
`
export const SkillsTitle=Styled.h2`
font-size: 40px; 
margin-bottom: 20px;
`
export const ProfileTitleSpan=Styled.span`
font-weight: normal;
`
export const SkillsTitleSpan=Styled.span`
font-weight: normal;
`


