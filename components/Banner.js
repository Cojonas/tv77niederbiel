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
                color: #333;
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
                background: #DDD;
                margin: 10px 0px;
                border-radius: 2px;
                float: left;
                text-align: left;
                width: 100%; 
                height: 100%;
                padding: 20px;
                -webkit-box-shadow:  4px 3px 8px -5px #000; 
                -moz-box-shadow:  4px 3px 8px -5px #000; 
                box-shadow:  4px 3px 8px -5px #000;
                transform: scale(1);
            }
            

            `}
        </style>
        </>



    )

}

export default Banner;