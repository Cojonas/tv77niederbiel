
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";


class ContentSection extends React.Component {


    constructor(props) {
        super(props)
    }

    render() {
        return <>

            <Col xs="12">
                <div className="full-width content-section">

                    <Row>
                        <Col xs="12" md="4">
                            <img src="/static/tennis_background.jpg"/>
                        </Col>
                        <Col xs="12" md="8">
                             <h1>{this.props.header}</h1>

                            <div className="content">
                                {this.props.children}
                            </div>


                            <div className="more-button">


                            </div>

                        </Col>
                        <Col xs="12">
                        <Link href={this.props.link}><button className="button-dark">Mehr</button></Link>
                        </Col>


                    </Row>


                 

                </div>



            </Col>


            <style jsx global>
                {`
            
                .content-section {
                    padding: 30px;
                    border-bottom: 1px solid black;
                    position: relative;
                    text-alignment: left;
                }
                .more-button {
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                }
                img {
                    width: 100%; 
                    height: auto;
                }
                 
                `}
            </style>




        </>
    }
}

export default ContentSection;