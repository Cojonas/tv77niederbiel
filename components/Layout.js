import Header from "./Header";
import Head from 'next/head'

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
            id:"4",
            href:"/mitglied",
            display: "Mitgliedschaft"
        },
        {
            id:"6",
            href:"/vereinsheim",
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


    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>TV 77 Niederbiel</title>
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            <meta name="msapplication-TileColor" content="#ffffff"/>    
            <meta name="theme-color" content="#000"/>

        </Head>

        <Drawer sites={sites} isDrawerOpen={isDrawerOpen} closeDrawer={()=> setIsDrawerOpen(false)} />

        <Media query="(max-width: 922px)">
            {   
                matches => <Header sites={sites} openDrawer={() => setIsDrawerOpen(true)}  navName={props.navName} isTop={isTop} mobile={matches} ></Header>
            }
        </Media>

        <VisibilitySensor onChange={(isVisible) => setIsTop(isVisible)}>
            <div className="top-background-tiny" />
        </VisibilitySensor>

        <div className="top">

            <center>


            </center>

        </div>
        <center>

        <div className="content-box">
                <div className="content-container">
                    {props.children}
                </div>
            </div>
        </center>



        <Footer sites={sites} />
        <style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>



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
                    height: 300px     ;
                    padding-top: 50px;
                    width: 100%;
                    color: white;
                    text-align: center;
    
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
                    text-align:center;
                }
                .content-box {
                    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                    position: relative;
                    top: -150px;
                    background: #222;
                    padding: 10px 0px;
                    opacity: 1;
                    max-width: 1024px;
                    z-index: 500;
                    
                  

                `}
        </style>




    </>



}

export default Layout



