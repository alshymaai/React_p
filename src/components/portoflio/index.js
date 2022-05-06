import React,{useState,useEffect} from "react";
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Image,Overlay,OverlaySpan} from './style.js'
import axios from "axios";
const Portoflio=()=>{
    const[images,setimages]=useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setimages(res.data.portfolio)})
            },[])
    const portfolioimages=images.map((imageitem)=>{
        return(
            <ImageWrapper key={imageitem.id}>
                <Image src={imageitem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return(
        <PortfolioSection>
            <PortfolioTitle>
                <Span>My</Span>Portfolio
            </PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <div className="box">
                {portfolioimages}
            </div>
        </PortfolioSection>
    )
}
export default Portoflio;