import React from "react"
import { OmitProps } from "antd/lib/transfer/renderListBody";

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
            .banner img {
                height: 250px;
                width: auto;
                float: left; 
            }
            .banner {
                width: 100%;
                height: auto; 

            }
            .infos {
                margin: 5px;
                background-color: #222;
                border: 2px solid black;
                float: left; 
                width: 100%; 
                height: 100%;
                padding: 20px;
                -webkit-box-shadow: inset 1px 1px 33px -6px rgba(0,0,0,1);
                -moz-box-shadow: inset 1px 1px 33px -6px rgba(0,0,0,1);
                box-shadow: inset 1px 1px 33px -6px rgba(0,0,0,1);
                                
            }

            `}
        </style>
        </>



    )

}

export default Banner;