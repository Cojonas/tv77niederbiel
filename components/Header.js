import BurgerIcon from "../components/BurgerIcon"
import Media from 'react-media';

import {CSSTransition} from "react-transition-group"
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
        href: "/anlage",
        display: "Die Anlage"
    },
    {
        id: "4",
        href: "/contact-us",
        display: "Kontakt"
    }
]


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.isTop = this.props.isTop;
        this.navName = this.props.navName;

        this.state = {
            visible: true,
            isTop: this.props.isTop,
        }

        this.setExpanded = this.setExpanded.bind(this);

    }



    componentWillReceiveProps(props) {
        this.setState({
            isTop: props.isTop
        })
    }

    setExpanded(expand) {
        this.setState({
            expanded: expand
        });
    }



    render() {
        let navLinkSpan;
        if (!this.state.isTop) {
            navLinkSpan = <span className="white-text"> > {this.navName}</span>
        } else {
            navLinkSpan = <></>
        }


        return <>

            <div className="header">
            <CSSTransition in={!this.state.isTop} classNames="my-node" timeout={1000} >
                <div>
                <img className="logo-img" src={process.env.assetPrefix + "static/tv77logo.png"} />

                    <Media query="(max-width: 599px)">
                        {matches =>
                            !matches ? (
                            <div className="nav-container">
                                {
                                    sites.map((item)  => <button className="navbar-item"href={item.href}>{item.display} </button> )
                                }
                            </div>
                            ) : (
                                <div className="nav-container">
                                    <BurgerIcon />
                                </div>
                            )
                        }
                    </Media>


                </div>


                    </CSSTransition>


            </div>

            <style jsx>

                {`
                .header{
                    background-color: #212529;
                    width: 100%;
                    height: auto;
                    z-index:1000;
                    position: -webkit-sticky; /* Safari */
                    position: sticky;
                    top: 0;
                }
                .logo-img  {
                    width: auto;
                    height: 60px;
                    padding: 10px;
                    
                }
                span {
                    color: white;
                }
                p {
                    color: white;
                }
                                
                .logo-text {
                    width: auto;
                    height: auto;
                }

                .logo-container {
                }

                .nav-container {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    height: 100%;
                    width: 50%;
                    display: flex;
                }
                .center-v {
                    vertical-align: middle;
                }
                .navbar-item {
                    border: none;
                    color: white;
                    height: 100%; 
                    flex-grow: 1;
                    background-color: transparent;
                }
                .navbar-item:hover {
                    border-bottom: 5px solid   #ff5c00;
                    transform: scale(1.1);
                    color :  #ff5c00;
                }
                .navbar-item > a {
                    color: white;
                    width: 100%; 
                    height: 100%;
                    text-align: center;
                }
                .right {    
                    right: 0
                }
                   
                a {
                    color: black;
                }

                .white-text {
                    color: white !important;
                }


                .logoheader-enter{
                    opacity: 0; 
                }
                .logoheader-enter-active{
                    opacity: 1;
                    transition: opacity 200ms;
                }

                .logoheader-enter-done {
                    opacity: 1;
                }
                .logoheader-exit{
                    opacity: 1;
                }
                .logoheader-exit-active{
                    opacitiy: 0;
                    transition: opacity 200ms;
                }

                .logoheader-exit-done {
                    opacity: 0;
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
    }
};

export default Header;