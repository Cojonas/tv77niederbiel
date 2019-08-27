import BurgerIcon from "../components/BurgerIcon"
import Media from 'react-media';
import { Row, Col } from "react-bootstrap"

import {Icon} from "antd"

const sites = [

    {
        id: "1",
        href: "/",
        display: "Start"
    },
    {
        id: "2",
        href: "/about",
        display: "Über uns"
    },
    {
        id: "3",
        href: "/teams",
        display: "Teams"
    },
    {
        id: "4",
        href: "/contact-us",
        display: "Kontakt"
    }
]


function Header(props) {



    let navLinkSpan;
    if (props.isTop) {
        navLinkSpan = <span className="white-text"> > {props.navName}</span>
    } else {
        navLinkSpan = <></>
    }


    return <>

        <div className="header">
            <div onClick={() => props.onChange()}>
                <Row >

                    <Col  xs={{ span: 2 }}>
                        <img className="logo-img" src={process.env.assetPrefix + "static/logo_white.png"} />
                    </Col>

                    
                        <Media query="(max-width: 900px)">
                            {matches =>
                                !matches ? <>
                                    <Col xs={{ span: 7, offset: 1 }} md={{ span: 6, offset: 2  }}
                                    >                                               
                
                                    <div className="nav-container">
                                        {
                                            sites.map((item) => <button key={item.id} className="navbar-item" href={item.href}>{item.display} </button>)
                                        }

                                    </div>


                                    </Col>

                                    <Col xs={{ span:1, offset:1}}>
                                        <div className="navbar-icon">
                                            <Icon type="facebook" style={{   fontSize: '40px', color: 'white' }} theme="outlined" />
                                        </div>

                                    </Col>


                                </> : (<>                                    <BurgerIcon  />
</>
                                    )

                            }
                        </Media>

                </Row>

            </div>


        </div>

        <style jsx>

            {`
                .header{
                    background: #2b2b2b;
                    width: 100%;
                    height: auto;
                    z-index:1000;
                    position: -webkit-sticky; /* Safari */
                    position: sticky;
                    top: 0;
                    border-bottom: 1px solid #ff5c00;
                }
                .logo-img  {
                    width: auto;
                    height: 80px;
                    
                }
                .gradient-stripe {
                    
                    height: 10px;
                    z-index:1000;
                    color: white;
                    text-align: center;
    
    
                }
                span {
                    color: white;
                }
                p {
                    color: white;
                }
                
                                


                .nav-container {
                    width: 100%;     
                    height: 100%;
                    display: flex;
                }
              
                .navbar-item {
                    border: none;
                    color: white;
                    height: 100%; 
                    margin: 0px 30px;
                    padding: 10px 0px;
                    background-color: transparent;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 1.2em;
                }

                .navbar-icon {

                    border: none;
                    color: white;
                    height: 100%; 
                    margin: 0px 0px;
                    padding: 10px 0px;
                    background-color: transparent;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 1.2em;


                }
                .navbar-item:hover {
                    border-bottom: 5px solid   #ff5c00;
                    transform: scale(1.1);
                }
                .navbar-item > a {
                    color: white;
                    width: 100%; 
                    height: 100%;
                    text-align: center;
                }
                   
                a {
                    color: black;
                }

                .white-text {
                    color: white !important;
                }                



                .my-node-enter {
                    opacity: 0;
                  }
                  .my-node-enter-active {
                    opacity: 1;
                    transition: opacity 200ms;
                  }
                  .my-node-enter-done {
                      opacity: 1;
                  }
                  .my-node-exit {
                    opacity: 1;
                  }
                  .my-node-exit-active {
                    opacity: 0;
                    transition: opacity 200ms;
                  }
                  .my-node-exit-done {
                      opacity: 0;
                  }
                  

            
            `}
        </style>


    </>

};

export default Header;