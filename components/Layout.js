import Header from "./Header";

import Media from "react-media";

import Footer from "./Footer";

import Drawer from "./Drawer"

import "../bootstrap.min.css"
import "../App.css"

import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";



function Layout(props) {
    const sites = [

        {
            id: "1",
            href: "/",
            display: "Start"
        },
        {
            id: "2",
            href: "/about",
            display: "Über uns"
        },
        {
            id: "3",
            href: "/teams",
            display: "Teams"
        },
        {
            id: "4",
            href: "/contact-us",
            display: "Kontakt"
        }
    ]

    const [isTop, setIsTop] = useState(true)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    return <>

        <Drawer sites={sites} isDrawerOpen={isDrawerOpen} closeDrawer={()=> setIsDrawerOpen(false)} />

        <Media query="(max-width: 900px)">
            {   
                matches => <Header sites={sites} openDrawer={() => setIsDrawerOpen(true)}  navName={props.navName} isTop={isTop} mobile={matches} ></Header>
            }
        </Media>

        <VisibilitySensor onChange={(isVisible) => setIsTop(isVisible)}>
            <div className="top-background-tiny" />
        </VisibilitySensor>

        <div className="top">

            <center>

                <img className="img-foreground" src="static/logo.png" />

            </center>

        </div>
        <center>

        <div className="content-box">
                <div className="content-container">
                    {props.children}
                </div>
            </div>
        </center>



        <Footer />

        <style jsx>
            {`
           
          
              
                .top-background-tiny {
                    background-color: #20232a;
                    height: 1px;
                    width:100%;

                }

                .top-background-color {
                    background-color: #20232a;
                    height: 100px;
                    width:100%;
                }

                .top {
                    background-image: url("static/tennis_court_sand.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    opacity: 0.6;
                    overflow: hidden;
                    height: 50vh     ;
                    padding-top: 50px;
                    width: 100%;
                    color: white;
                    text-align: center;
    
                }
                .top  .img-foreground {
                  height: 200px; 
                  padding: 10px;
                  width: auto; 
                  opacity: 1;
                }

                .detector-box{
                    height: 100px; 
                    top: 100px;
                    left: 0px;

                    width: auto;
                    background-color: transparent;
                }
                .scrollimage {
                    height: 10px;
                }
                .fitscreen {
                    width: 100%; 
                    height: auto;
                }

                .content-container {
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                }
                .content-box {
                    -webkit-box-shadow: 5px 3px 15px -5px #000000; 
                    box-shadow: 5px 3px 15px -5px #000000;
                    background-color: #333;
                    position: relative;
                    top: -50px; 
                    padding: 10px 20px;
                    opacity: 1;
                    max-width: 1024px;
                    z-index: 500;
                  }
    



                `}
        </style>




    </>



}

export default Layout



