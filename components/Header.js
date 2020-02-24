import { Row, Col } from "react-bootstrap"

import { Icon } from "antd"




function Header(props) {

    let navLinkSpan

    if (props.isTop) {
        navLinkSpan = <span className="white-text"> > {props.navName}</span>
    } else {
        navLinkSpan = <></>
    }

    const noBgHeader = !props.isDrawerOpen && props.isTop;
     


    return <>

        <div className={ noBgHeader ? "header" : "header noOpacity"}>
                <Row className="justify-content-between" noGutters>
                    <Col xs={{ span: 1 }}>
                        <img onClick={() => window.location.href= process.env.assetPrefix + "/" } className="logo-img" src={process.env.assetPrefix + "static/logo_white.png"} />
                    </Col>
                     {
                         !props.mobile ?                     

                         <Col className="justify-content-center" xs={{ span: 10 }} xl={{ span: 8}}
                         >
                             <div className="nav-container">
                                 {
                                     props.sites.map((item) => <a key={item.id} className="navbar-item" href={process.env.assetPrefix + item.href}>{item.display} </a>)
                                 }
     
                             </div>
     
     
     
                         </Col>
                        : <Col  xs={{ span: 10}}></Col>

     
                     }
                    <Col xs={{ span: 1, offset: 0 }} md={{ span: 1}} xl={{span : 1}}>
                        <div className="navbar-icon">
                            {
                                !props.mobile ?
                                    <div onClick={() => window.location.href = "https://www.facebook.com/TV-77-Niederbiel-612990049042372/"}>
                                        <Icon  type="facebook" style={{ fontSize: '40px', color: 'white', float: "right", paddingRight: 15}} theme="outlined" />
                                    </div>
                                    : <></>
            
                            }
                        </div>

                    </Col>




                </Row>


        </div>

        <style jsx>

            {`
                .header{
                    background: rgba(34, 34, 34, 1);
                    width: 100%;
                    height: auto;
                    z-index:1000;
                    position: -webkit-sticky; /* Safari */
                    position: fixed;
                    top: 0;
                    -webkit-transition: background-color 200ms ease-out;
                    -moz-transition: background-color 200ms ease-out;
                    -o-transition: background-color 200ms ease-out;
                    transition: background-color 200ms ease-out:
                                }
                 .opacity  {
                    background-color: rgba(34, 34, 34, 1);
                 }

                 .noOpacity {
                    background: rgba(34,34,34, 1) !important; 
                    -webkit-box-shadow: 0px 7px 5px 0px rgba(34,34,34,1);
                    -moz-box-shadow: 0px 7px 5px 0px rgba(34,34,34,1);
                    box-shadow: 0px 7px 5px 0px rgba(34,34,34,1);

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
                span {
                    color: #888; 
                }
                p {
                    color: #888; 
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
            `}
        </style>


    </>

};

export default Header;