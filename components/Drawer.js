import React from "react"

function Drawer(props) {

    return <>

        <div id="mySidenav" className={props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed"}>
            <a href="javascript:void(0)" className="closebtn" onClick={() => {props.closeDrawer()}}>&times;</a>
            {props.sites.map((item) => <div key={item.id} style={{padding: 10}}><a className="drawer-item"  href={item.href}>{item.display}</a></div>)}

            <div className="logo-box">
                <img src={process.env.assetPrefix + "static/logo_white.png"}>
                </img>

            </div>
        </div>

        <style jsx>

            {`
            .sidenav {
                height: 100vh;
                width: 0px;
                position: fixed;
                z-index: 1001;
                top: 0;
                right: 0;
                background-color: #222;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
              }

              .drawer-open{
                  width: 300px;
              }
              .drawer-closed{
                  width: 0;
              }
              
              .sidenav .closebtn {
                color: #ff5c00;

                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
              }
              .sidenav .logo-box {
                padding: 20px;
                opacity: 0.3;
                width: 100%;
                text-align: center;
              }
            .drawer-item {
                border: none;
                color: white;
                height: 100%; 
                width: 100%;
                
                background-color: transparent;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 1.2em;
  
            }

            .drawer-item:hover {
                color: #ff5c00;
            }
            
            `}

        </style>
    </>
}

export default Drawer;