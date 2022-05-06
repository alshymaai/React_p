import React  from "react";
import { Link } from "react-router-dom";
import { NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,Page } from "./style.js";
const Navbar=()=>{
    return(
       <NavbarSection>
           <div className="container">
               <Logo>
                   <LogoText>Ultra Profile</LogoText>
               </Logo>
               <UlList>
                   <ListItem>
                   <Page to="/">Home</Page>
                   </ListItem>
                   <ListItem>
                       <Anchor href="#">Work</Anchor>
                   </ListItem>
                   <ListItem>
                       <Anchor href="#">Portfolio</Anchor>
                   </ListItem>
                   <ListItem>
                       <Anchor href="#">Resume</Anchor>
                   </ListItem>
                   <ListItem>
                       <Anchor href="#">About</Anchor>
                   </ListItem>
                   <ListItem>
                       <Page to="contact">Contact</Page>
                   </ListItem>
               </UlList>

           </div>
       </NavbarSection>
    )
}
export default Navbar;