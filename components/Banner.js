import React from "react"

function Banner(props) {
    return (
        <>          
        <div className="banner">
            <div className="infos">
                {props.children}
            </div>
        </div>
        <style jsx>
            {`
            .banner {
                width: 100%;
                height: auto; 
                margin: 0 auto; 
                color: black;
            }

            .ripple {

                background-position: center;
                transition: background 0.8s;
            }
            .ripple:hover {
                background: rgba(200,200,200, 0.4) radial-gradient(circle, transparent 1%, rgba(200,200,200, 0.4)  1%) center/15000%;
            }
            .ripple:active {
                background-size: 100%;
                transition: background 0s;
                background:  #fff;
            }
            .infos {
                background-color: rgba(255,255,255,1);
                margin: 10px 0px;
                border-radius: 2px;
                float: left;
                text-align: left;
                width: 100%; 
                height: 100%;
                padding: 20px;
                -webkit-box-shadow:  4px 3px 14px -5px #fff; 
                -moz-box-shadow:  4px 3px 14px -5px #fff; 
                box-shadow:  4px 3px 14px -5px #fff;        
            }
             .infos:hover {
                transform: scale(1.01);
            }

            `}
        </style>
        </>



    )

}

export default Banner;