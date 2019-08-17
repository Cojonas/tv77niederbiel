
import { Container, Row, Col } from "react-bootstrap";


class ContentSection extends React.Component {


    constructor(props) {
        super(props)
    }

    render() {
        return <>

            <Col xs="12">
                <div className="full-width content-section ">
                    {this.props.children}
                </div>
            </Col>


            <style jsx global>
                {`
            
                .content-section {
                    padding: 30px;
                    position: relative;
                    text-align: left;
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