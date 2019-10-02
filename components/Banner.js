import React from "react"
import { OmitProps } from "antd/lib/transfer/renderListBody";

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
            .banner img {
                height: 250px;
                width: auto;
                float: left; 
            }
            .banner {
                width: 100%;
                height: auto; 

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
                background-color: #333;
                margin: 5px 0px;
                border-radius: 10px;
                float: left; 
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