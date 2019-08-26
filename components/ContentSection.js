
import { Col } from "react-bootstrap";

function ContentSection(props) {

    return <>

        <Col xs="12">
            <div className="full-width content-section ">
                {props.children}
            </div>
        </Col>


        <style jsx>
            {`

             

  
            
                .content-section {
                    padding: 30px 0px;
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


export default ContentSection;