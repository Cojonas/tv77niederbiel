import React from "react"

import SocialMedia from "../components/SocialMedia"

function Drawer(props) {

    return <>

        <div id="mySidenav" className={props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed"}>
            {props.sites.map((item) => <div className="drawer-item"   key={item.id} style={{padding: 10}}><a href={process.env.assetPrefix + item.href}>{item.display}</a></div>)}


            <SocialMedia visible={props.isDrawerOpen} />
            <div className="logo-box">
                <img src={process.env.assetPrefix + "static/logo_white.png"}>
                </img>

            </div>
        </div>

        <style jsx>

            {`
            .sidenav {
                height: 0px;
                width: 100vw;
                position: fixed;
                z-index: 1001;
                top: 80px;
                right: 0; 
                background-color: white;
                overflow-x: hidden;
                transition: 0.5s;
              }

              .drawer-open{
                  height: 100vh;
              }
              .drawer-closed{
                  height: 0px;
              }
              
              .sidenav .closebtn {
                color: black;
                position: absolute;
                top: 5px;
                right: 20px;
                font-size: 36px;
              }
              .sidenav .logo-box {
                padding: 20px;
                opacity: 0.3;
                width: 100%;
                text-align: center;
              }
            .drawer-item {
                border: none;
                color: black;
                height: auto; 
                width: 100%;
                margin: auto 0px;
                text-align: center;
                background-color: transparent;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 1.2em;
  
            }

            .drawer-item:hover {
                color: #ff5c00;
                background-color: rgba(0,0,0,0.2);
            }
            .drawer-item  a {
                color: black;
            }
            
            `}

        </style>
    </>
}

export default Drawer;