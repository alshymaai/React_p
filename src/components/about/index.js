import React from "react";
import{AboutSection,AboutInfo,InfoTitle,InfoDir,InfoDec,Span,Anchor} from'./style.js'
const About=()=>{
    return(
       <AboutSection>
           <div className="container">
               <AboutInfo>
                   <InfoTitle>
                       <Span>This Is</Span>Me
                   </InfoTitle>
                   <InfoDir>
                       Creative Director
                   </InfoDir>
                   <InfoDec>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis? 
                   </InfoDec>
                   <InfoDec>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                   </InfoDec>
               </AboutInfo>
           </div>
       </AboutSection>
    )
}
export default About;