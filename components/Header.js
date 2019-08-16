import Link from "next/link";
import BurgerIcon from "../components/BurgerIcon"
import { CSSTransition } from 'react-transition-group';
import { Col, Row } from "react-bootstrap";
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
            isTop: this.props.isTop
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
            <div className="logo-container">    
                                <img className="logo-img" src="/static/tv77_logo_cropped.png" /><span>TV 77 Niederbiel</span>
                            </div>





            </div>





            <style jsx>

                {`
                .header{
                    background-color: #20232a;
                    width: 100%;
                    height: auto;
                    z-index:1000;
                    position: -webkit-sticky; /* Safari */
                    position: sticky;
                    top: 0;
                }
                .logo-img  {
                    width: auto;
                    height: 100px;
                    padding: 10px;
                }
                span {
                    color: white;
                }
                                
                .logo-text {
                    width: auto;
                    height: auto;
                }

                .logo-container {
                    width: 100%;
                    height: auto;
                    display: block;
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


                .shrink-enter{
                    padding: 90px 20px; 
                }
                .shrink-enter-active{
                    padding: 5px;
                    transition: padding 200ms;
                }

                .shrink-enter-done {
                    padding: 5px !important;
                }
                .shrink-exit{
                    padding: 5px; 
                }
                .shrink-exit-active{
                    padding: 90px 20px;
                    transition: padding 200ms;
                }

                .shrink-exit-done {
                    padding: 90px 20px;
                }

            
            `}
            </style>


        </>
    }
};

export default Header;