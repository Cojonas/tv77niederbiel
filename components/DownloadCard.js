import React from "react"

function DownloadCard (props) {
    return <>
        <a href={props.href} >
            <div id="box" className="zoom">
                <div id="content">
                    <div id="thumbnail">
                    &nbsp;
                    </div >
                    <div id="subtitle">
                        {props.title}
                    </div>
                </div>
                <div id="overlay" className="inner">&nbsp;
                <img src="static/download-ion.png"></img>
                </div>
            </div>
        </a>
        <style jsx>{`
            #box {
                height: 250px; 
                width: 100%;
                max-width: 230px; 
                border: 1px solid black;
                padding: 0px 20px;
                border-radius: 3px;
                margin: 10px auto;
                background-color: #111;
                position: relative;
                text-align: center;
            }

            #overlay {
                position: absolute;
                top: 0; 
                left: 0; 
                background-color: rgb(100,100,100,0.8);
                display: none;
            }
            #box:hover #overlay {
                display: block;
            }

            img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;           
             }
            #content {
                position: absolute;
                top: 0; 
                left: 0; 
                height: 100%;
                width:100%;
                margin: 0 auto;
            }
      
            .inner {
                position: absolute;
                height: 100%; 
                top: 0; 
                left: 0; 
            }
            #thumbnail {
                height: 85%;
                width: auto;
                background-image: url("static/pdf-logo.png");
                background-size:     cover;                      /* <------ */
                background-repeat:   no-repeat;
                background-position: center;              /* optional, center the image */
            }
            #subtitle {
                height: 15%; 
                width: auto;
                text-align: center;
            }
            .zoom {
                background-color: green;
                transition: transform .1s; /* Animation */
                margin: 0 auto;
              }
              
            .zoom:hover {
                transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
            }
            #box .wrapper {
                background-image : url('static/download-thumbnail.png');
                background-size:     cover;                      /* <------ */
                background-repeat:   no-repeat;
                background-position: center center;              /* optional, center the image */
                z-index : 10;
                position : absolute;
                top : 0;
                left : 0;
            }

            a {
                color: white;
                font-weight: bold;
                letter-spacing: -1px;

            }
            
        
        `}</style>
    </>
}

export default DownloadCard;