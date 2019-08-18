import Header from "./Header";

import Media from "react-media";

import Footer from "./Footer";

import VisibilitySensor from "react-visibility-sensor";



class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.affixRef = React.createRef();

        this.state = {
            isTop: true
        }

    }

    onChange(isVisible) {
        this.setState({
            isTop: isVisible
        })
    }


    render() {
        var topBackgroundStyle = {
            
            
            'background-image': 'url(' + process.env.assetPrefix + 'static/tennis_court_sand.jpg)',
            "background-position": 'center',
            "background-repeat": 'no-repeat',
            "background-attachment": 'fixed',
            "background-size": 'cover',
            "width": '100%', 
            "height": '200px',
            "-index":'1000',

        
        
        } 
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
            <VisibilitySensor onChange={this.onChange}>
                <div className="top-background-tiny" />
            </VisibilitySensor>
        

            <Media query="(max-width: 599px)">
                {
                    matches => matches
                        ? (<Header navName={this.props.navName} isTop={this.state.isTop} mobile="true" ></Header>)
                        : (<Header navName={this.props.navName} isTop={this.state.isTop} mobile="false"></Header>)
                }
            </Media>
        



            <div style={topBackgroundStyle} >
            </div>

            <div className="content-box">
                {this.props.children}
            </div>



            <div className="footer-section">

                <Footer />


            </div>

            <style jsx>
                {`
                .top-background-tiny {
                    background-color: red;
                    height: 0px;
                    width:100%;

                }
                .top-background {
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                    width: 100%; 
                    height: 200px;
                    z-index:1000;

                }
                .top-background-color {
                    background-color: #20232a;
                    height: 100px;
                    width:100%;
                }

                .detector-box{
                    height: 100px; 
                    top: 100px;
                    left: 0px;

                    width: auto;
                    background-color: transparent;
                }
                .scrollimage {
                    height: 10px;
                }
                .fitscreen {
                    width: 100%; 
                    height: auto;
                }

                .content-box {
                    background-color: #dbdbd7;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                }



                `}
            </style>

            <style jsx global>

                {`
              
                h1:after {
                    display:block;
                    content: '';
                    border-bottom: solid 3px #ff5c00;
                    transform: scaleX(0);  
                    transition: transform 250ms ease-in-out;
                  }
                  h1:hover:after { transform: scaleX(1); }
                  h1.fromRight:after{ transform-origin:100% 50%; }
                  h1.fromLeft:after{  transform-origin:  0% 50%; }
        
   
                  p:after {
                    display:block;
                    content: '';
                    border-bottom: sopd 3px #ff5c00;
                    transform: scaleX(0);  
                    transition: transform 250ms ease-in-out;
                  }
                  p:after { transform: scaleX(1); }
                  p.fromRight:after{ transform-origin:100% 50%; }
                  p.fromLeft:after{  transform-origin:  0% 50%; }
                

              
                  body {
                    font-family:  "Impact" !important;

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



