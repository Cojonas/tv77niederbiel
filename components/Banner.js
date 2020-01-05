import React from "react"

function Banner(props) {
    return (
        <>          
        <div className="banner">
            <div className="infos ripple">
                {props.children}
            </div>
        </div>
        <style jsx>
            {`
            .banner {
                width: 100%;
                height: auto; 
                margin: 0 auto; 
            }

            .ripple {
                    background-position: center;
                    transition: background 0.8s;
                }
            .ripple:hover {
                background: #222 radial-gradient(circle, transparent 1%, #222 1%) center/15000%;
            }
            .ripple:active {
                background-color: #111;
                background-size: 100%;
                transition: background 0s;
            }
            .infos {
                background-color: #222;
                margin: 5px 0px;
                border-radius: 2px;
                float: left;
                text-align: left;
                width: 100%; 
                height: 100%;
                padding: 20px;
                -webkit-box-shadow:  4px 3px 14px -5px #000000; 
                -moz-box-shadow:  4px 3px 14px -5px #000000; 
                box-shadow:  4px 3px 14px -5px #000000;
                                
            }

            `}
        </style>
        </>



    )

}

export default Banner;