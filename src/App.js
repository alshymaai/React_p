import React,{Component} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Contact from './components/contact';
import Index from './components/index';
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </div>
            </BrowserRouter>
        )
    }
}
export default App;