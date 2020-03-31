import Header from "./Header";
import NameBadge from "./NameBadge"
import Head from 'next/head'

import Media from "react-media";

import Footer from "./Footer";

import Drawer from "./Drawer"

import "../bootstrap.min.css"
import "../App.css"

import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";



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
            href: "/mitglied",
            display: "Mitgliedschaft"
        },
        {
            id: "6",
            href: "/vereinsheim",
            display: "Vereinsheim"
        },
        {
            id: "5",
            href: "/kontakt",
            display: "Kontakt"
        }
    ]

    const [isTop, setIsTop] = useState(true)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [isMobile, setIsMobile] = useState(false)


    const [current, setCurrent] = React.useState(0);

    var backgroundStyle = {}

    /*
    if (props.pictures) {
        backgroundStyle = {
            backgroundImage: 'url(\"' + props.pictures[current].picture + '\"'
        }

        React.useEffect(() => {

            const next = (current + 1) % props.pictures.length;
            const id = setTimeout(() => setCurrent(next), 5000);
            return () => clearTimeout(id);
        }, [current]);


    } else {
        backgroundStyle = {
            backgroundImage: "url(/static/tennis_court_sand.jpg)"

        }
    }
    */







    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>TV77 Niederbiel</title>
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#000" />
        </Head>

        <Drawer sites={sites} isDrawerOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />


        <Media query="(max-width: 922px)" onChange={(matches) => setIsMobile(matches)} />

        {
            isMobile ? <><BurgerIcon isDrawerOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}></BurgerIcon> <NameBadge /> </>

                : <></>
        }

        <Header sites={sites} isDrawerOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} navName={props.navName} isTop={isTop} mobile={isMobile} ></Header>

        <div className="top">
            <div style={backgroundStyle} className="backgroundGallery">

                <VisibilitySensor onChange={(isVisible) => setIsTop(isVisible)}>
                    <div className="top-background-tiny" />
                </VisibilitySensor>
                <center>

                    <div className="stickyBottom">
                        {/*
                        <div className="topTextWrapper">
                            <span className="bigger">{props.title}</span>
                        </div>
                    */}
                            <div className="title animated rollIn" >

                            </div>

                            <div className="titleText">
                                    <h1>{props.title}</h1>
                                </div>





                    </div>
                </center>

            </div>
        </div>



        <center>
            <div className="content-box">
                <div className="content-container">
                    {props.children}
                </div>
            </div>
        </center>


        <div className="footer">
            <Footer sites={sites} />
        </div>


        <style>
            @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        </style>



        <style jsx>
            {`


                .backgroundGallery {
                    background : url("/static/tennis_court_sand.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-attachment: fixed;
                    min-height: 400px;

                    position: relative;
                    
                }
                .stickyBottom {
                    background: white;
                }
                .gradientBackground {
                    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 4%, rgba(255,255,255,0.1) 8%,    rgba(255,255,255,1) 100%);
                }
                .title {
                    background: url("static/Bier.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 300px 200px;
                    height: 300px;
                    margin-left: -150px;
                    padding: 30px;
                    width: 100%;
                    z-index: 1000;
                    position: absolute;
                    width: 300px;


                    text-align: center !important;

                    left: 50vw;
                    bottom: 0 ;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);

                }

                .titleText {
                    color: black;
                    font-size: 15px;

                    background: white;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 300px 200px;
                    padding: 30px;
                    width: 100%;
                    
                    position: absolute;
                    width: 300px;


                    text-align: center !important;


                    left: 50vw;
                    bottom: 19px ;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);


                }
  

                .animated {
                 }
                 
                 @-webkit-keyframes rollIn {
                    0% { 
                        -webkit-transform: translateX(-100%) scale(0.001) rotate(-3000deg); 
                     }
                     50% { 
                        -webkit-transform: translateX(200%) scale(1.6) rotate(0deg); 
                     }
                     100% { 
                        -webkit-transform: translateX(-100%) scale(0.1) rotate(-3000deg); 
                      }
  
 
                 }
                 
                 @keyframes rollIn {
                    0% { 
                       transform: translateX(-100%) scale(0.1) rotate(-3000deg); 
                    }
                    50% { 
                       transform: translateX(200%) scale(1) rotate(0deg); 
                    }
                    100% { 
                        transform: translateX(-100%) scale(0.1) rotate(-3000deg); 
                     }
 
                 }
                .rollIn {
                    -webkit-animation-name: rollIn;
                    animation-name: rollIn;
                    -webkit-animation-direction: alternate-reverse;
                    animation-direction: alternate-reverse;
                    -webkit-animation-duration: 10s;
                    animation-duration: 10s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;


                 }

                .topTextWrapper {
                    max-width: 1024px;
                }
           
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
                    background: #222;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    height: auto     ;
                    width: 100%;
                    color: black;
                    text-align: left;
    
                }
                .top  .img-foreground {
                  height: 200px; 
                  padding: 20px;
                  margin: 10px;
                  margin-bottom: 100px;
                  width: auto; 
                  opacity: 1;
                }
                .content-container {
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                    text-align:left;
                    max-width: 1024px;

                }
                .content-box {
                    position: relative;
                    padding: 0px 5px;
                    z-index: 500;
                    
                }
         

                `}
        </style>




    </>



}

export default Layout



