import Header from "./Header";
import Media from "react-media";

import Footer from "./Footer";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isScrolledDown: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height;

        if  (scrolled < 0.36) {
            /*
            this.setState(
                {
                    isScrolledDown: false
                }
            );
            */
        } else {
            /*
            this.setState({
                isScrolledDown:  true
            })
            */

        }
        
    }

    render() {

        return <>
        <head>
        <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />

            <meta name="viewport" content="width=device-width, initial-scale=1" />

        </head>
       

            <div className="sticky">

            <Media query="(max-width: 599px)">
                    {
                        matches => matches ? (<Header mobile="true" ></Header>) : (<Header mobile="false"></Header>)
                    }
                </Media>

            </div>



            <div className="content">


                {this.props.children}
            </div>

            <div className="footer-section">

                <Footer />


            </div>

            <style jsx>
                {`
        
                .scrollimage {
                    height: 10px;
                }
                .fitscreen {
                    width: 100%; 
                    height: auto;
                }

                `}
            </style>

            <style jsx global>

                {`
                .button-bright {
                    
                    height: 50px; 
                    width: auto; 
                    background-color: white;
                    border: none;
                    margin: 5px !important;
                }

                .button-dark {
                    height: 50px; 
                    width: auto; 
                    background-color: #11161f;
                    color: white;
                    border: none;
                    margin: 5px !important;
                }
                p {
                    margin:0px;
                }


                  html {
                    font-family: 
                    -apple-system,        // Safari for OS X and iOS (San Francisco)
                    BlinkMacSystemFont,   // Chrome < 56 for OS X (San Francisco)
                    "Segoe UI",           // Windows
                    Roboto,               // Android
                    "Helvetica Neue",     // Basic web fallback
                    Arial, 
                    sans-serif;
               
                  }

                  .footer-section {
                    background-color: #11161f;
                    height: 20vh; 
                    width: 100%; 
                    bottom: 0px;
                    left: 0px;
                  }
                  
                  
                  
                  
                `}
            </style>


      
        </>

    }

}

export default Layout



