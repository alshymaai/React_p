import React,{useState,useEffect} from "react";
import{ProfileSkills,ProfileSection,ProfileList,ProfileItem,ProfileItemSpan,SpanWeb,Skills,SkillsDesc,SkillsBar,BarTitle,ParentSpan,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan,BarPerc,BarParent} from'./style.js'
import axios from "axios";
const Profile=()=>{
   const[bar,setbar]=useState([])
   useEffect(()=>{
       axios.get('js/data.json').then(res=>{setbar(res.data.profile)})
   },[])
   const profilebar=bar.map((baritem)=>{
       return(
           <SkillsBar key={baritem.id}>
               <BarTitle>
                   {baritem.title}
               </BarTitle>
               <BarPerc>
                   {baritem.percentage}
               </BarPerc>
               <BarParent>
                   <ParentSpan sp={baritem.id}></ParentSpan>
               </BarParent>
           </SkillsBar>
       )
   })
   return(
       <ProfileSkills>
           <div className="container">
               <ProfileSection>
                   <ProfileTitle>
                       <ProfileTitleSpan>
                           My
                       </ProfileTitleSpan>
                       Profile
                   </ProfileTitle>
                   <ProfileList>
                       <ProfileItem>
                           <ProfileItemSpan>Name</ProfileItemSpan>
                           Hamza Nabil
                       </ProfileItem>
                       <ProfileItem>
                           <ProfileItemSpan>Birthday</ProfileItemSpan>
                           21/1/1996
                       </ProfileItem>
                       <ProfileItem>
                           <ProfileItemSpan>Address</ProfileItemSpan>
                           Ain Shams
                       </ProfileItem>
                       <ProfileItem>
                           <ProfileItemSpan>Phone</ProfileItemSpan>
                           4444 5555 6666
                       </ProfileItem>
                       <ProfileItem>
                           <ProfileItemSpan>Email</ProfileItemSpan>
                           hamza@hamza.com
                       </ProfileItem>
                       <ProfileItem>
                           <ProfileItemSpan>Website</ProfileItemSpan>
                           <SpanWeb>www.google.com</SpanWeb>
                       </ProfileItem>
                   </ProfileList>
               </ProfileSection>
               <Skills>
                   <SkillsTitle>
                       Some
                   <SkillsTitleSpan>Skills</SkillsTitleSpan>
                   </SkillsTitle>
                   <SkillsDesc>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                   </SkillsDesc>
                   {profilebar}
               </Skills>
           </div>
       </ProfileSkills>
   )
}
export default Profile;