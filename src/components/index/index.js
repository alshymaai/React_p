import React,{Component} from "react";
import Home from './../home';
import Work from './../work';
import Portoflio from './../portoflio';
import Profile from './../profile';
import About from './../about';
import Socialmedia from './../socialmedia';
import Footer from './../footer';
class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <Work/>
                <Portoflio/>
                <Profile/>
                <About/>
                <Socialmedia/>
                <Footer/>
            </div>
        )
    }
}
export default Index;
