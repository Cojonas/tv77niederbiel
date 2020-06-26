import { Row, Col } from "react-bootstrap"

import { Icon } from "antd"




function Header(props) {

    let navLinkSpan

    if (props.isTop) {
        navLinkSpan = <span className="white-text"> > {props.navName}</span>
    } else {
        navLinkSpan = <></>
    }

    const noBgHeader = !props.isDrawerOpen && !props.isTop;
     


    return <>

        <div className={ noBgHeader ? "header" : "header"}>
                <Row className="justify-content-between" noGutters>
                    <Col xs={{ span: 1 }}>
                        <img onClick={() => window.location.href= process.env.assetPrefix + "/" } className="logo-img" src={process.env.assetPrefix + "static/logo.png"} />
                    </Col>
                     {
                         !props.mobile ?                     

                         <Col style={{maxWidth: 1024}} className="justify-content-center" xs={{ span: 10 }} xl={{ span: 8}}
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
                    background:#fff;
                    width: 100%;
                    height: auto;
                    z-index:1000;
                    position: -webkit-sticky; /* Safari */
                    position: fixed;
                    top: 0;
                    -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
                    -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
                    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);

                }
                 .opacity  {
                    background-color: rgba(34, 34, 34, 1);
                 }

                 .noOpacity {
                    background: rgba(34,34,34, 0) !important; 

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
                .white-text {
                    color: white !important;
                }
            `}
        </style>


    </>

};

export default Header;