import BurgerIcon from "../components/BurgerIcon"
import Media from 'react-media';

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