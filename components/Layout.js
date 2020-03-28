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
import SocialMedia from "./SocialMedia"



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
                        <div className="title" >
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
                    padding: 30px 10px;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%)
                    margin: auto
                }
                .gradientBackground {
                    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 4%, rgba(255,255,255,0.1) 8%,    rgba(255,255,255,1) 100%);
                }
                .title {
                    max-width: 1024px;
                    min-width: 200px;
                    background: white;
                    margin: 0px 30px; 
                    padding: 20px; 
                    font-size: 30px;
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



