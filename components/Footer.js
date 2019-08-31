
import React from "react"
import { Row, Col } from "react-bootstrap"
function Footer(props) {
    return <>
        <div className="footer">
            <center>
                <div className="footer-content">
                    <Row>
                        <Col cols="6" style={{ padding: 20 }}>

                            {
                                props.sites.map((item) => <p key={item.id}><a className="a-footer" href={process.env.assetPrefix + item.href}>{item.display}</a></p>)
                            }



                        </Col>
                        <Col style={{ padding: 30, textAlign: "center" }} cols="12" md="6">

                        <p><a className="a-footer" href={process.env.assetPrefix +"/impressum"}>Datenschutz / Impressum</a></p>
                        <p><a className="a-footer" href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/">Facebook</a></p>

                            <div style={{ position: "relative", bottom: 0, right: 0 }}>
                                <span >                            © TV 77 Niederbiel 2019
                            </span>

                                <img src={process.env.assetPrefix + "static/logo_white.png"}></img>

                            </div>

                        </Col>
                    </Row>
                </div>
            </center>

        </div>


        <style jsx>
            {`

            .footer {
                height: auto; 
                width: 100%; 
                background: #111;
                color: #888; 

            }
            .footer-content {
                max-width: 1024px;
                text-align: center;
            }
            a{
                color: #888; 
            }               
            img {
                width: 50px;
                margin: 10px;
                opacity: 0.5;
            }
            `}
        </style>


    </>


}

export default Footer;