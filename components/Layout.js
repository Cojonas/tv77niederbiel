import Header from "./Header";

import Media from "react-media";

import Footer from "./Footer";

import "../bootstrap.min.css"
import "../App.css"

import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";



function Layout(props) {


    const [isTop, setIsTop] = useState(true)



    return <>

        <Media query="(max-width: 599px)">
            {
                matches => matches
                    ? (<Header navName={props.navName} isTop={isTop} mobile="true" ></Header>)
                    : (<Header navName={props.navName} isTop={isTop} mobile="false"></Header>)
            }
        </Media>

        <VisibilitySensor onChange={(isVisible) => setIsTop(isVisible)}>
            <div className="top-background-tiny" />
        </VisibilitySensor>

        <div className="content-box">
            {props.children}
        </div>

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

                .content-box {
                    background-color: #333;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                }



                `}
        </style>

   


    </>



}

export default Layout



