import React, { Fragment } from "react";
import Footer from './../footer'
import{ContactSection,ContactTitle,Form,FormInput,InputText,InputEmail,InputExp,TextArea,Input,InputSubmit,Span}from './style.js'
const Contact=()=>{
    return(
        <React.Fragment>
       <ContactSection>
           <div className="container">
               <ContactTitle>
                   <Span>Drop</Span>Me Aline
               </ContactTitle>
               <Form action="">
                   <FormInput>
                       <InputText type='text' placeholder="Your Name"/>
                       <InputEmail type='email' placeholder="Your Email"/>
                   </FormInput>
                   <InputExp type='text' className="sub" placeholder="Your Subject"/>
                   <TextArea cols='30' rows='10' placeholder="Your Message"></TextArea>
                   <InputSubmit type="submit" value="Send Message"/>
               </Form>
           </div>
       </ContactSection>
       <Footer/>
       </React.Fragment>
    )
}
export default Contact;