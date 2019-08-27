import BurgerIcon from "../components/BurgerIcon"
import Media from 'react-media';
import { Row, Col } from "react-bootstrap"

import { Icon } from "antd"




function Header(props) {



    let navLinkSpan;
    if (props.isTop) {
        navLinkSpan = <span className="white-text"> > {props.navName}</span>
    } else {
        navLinkSpan = <></>
    }



    return <>

        <div className="header">
            <div >
                <Row >

                    <Col xs={{ span: 2 }}>
                        <img className="logo-img" src={process.env.assetPrefix + "static/logo_white.png"} />
                    </Col>
                     {
                         !props.mobile ?                     
                         
                         <Col className="justify-content-center" xs={{ span: 8, offset: 0 }} xl={{ span: 6, offset: 1}}
                         >
                             <div className="nav-container">
                                 {
                                     props.sites.map((item) => <a key={item.id} className="navbar-item" href={item.href}>{item.display} </a>)
                                 }
     
                             </div>
     
     
     
                         </Col>
                         :               <Col className="justify-content-center" xs={{ span: 6, offset: 1 }}></Col>

     
                     }
                    <Col xs={{ span: 1, offset: 1 }} xl={{span : 1, offset: 2}}>
                        <div className="navbar-icon">

                            {
                                !props.mobile ?
                                    <Icon  type="facebook" style={{ fontSize: '40px', color: 'white' }} theme="outlined" />


                                    : 
                                    
                                    <div onClick={() => props.openDrawer()} >
                                        <BurgerIcon  />

                                        </div>


                            }

                        </div>

                    </Col>




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
                .show {
                    display:block;
                }
                .hide {
                    display: none;
                }
                .logo-img  {
                    width: auto;
                    height: 80px;
                    padding: 10px;
                    
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
                    text-align: center;

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
                    color: #ff5c00;
                    text-decoration: none;
                    border-bottom: 2px solid   #ff5c00;
                }
                .navbar-item > a {
                    color: white;
                    width: 100%; 
                    height: 100%;
                    text-align: center;
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