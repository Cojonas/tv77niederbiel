import React from "react"
import {Icon} from "antd"
import Banner from "./Banner"

function ContactBanner(props) {

    const Phone = props.phone ? <div className="contact-icon" ><Icon type="phone" /> {props.phone}</div> : <></>

    const Mail = props.mail ? <div className="contact-icon" ><Icon  type="mail" /> {props.mail}</div>: <></>

    return (
        <div >
            <Banner>
            <p> {props.name}  </p>
            <div>            
                {
                    Phone
                }


            </div>
            <div>
                {
                    Mail
                }
            </div>


            </Banner>
        

    <style jsx>

{`       
    .contact  {
        border: 1px solid black;  
        background: #111;
        padding: 10px;
        margin: 5px;
    }
    .contact-icon {
        height: 50px; 
        width: auto;
        padding: 5px 15px;
    }
    p {
        padding: 0px ;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: -1px;
    }
`}
</style>


        </div>

    )

}

export default ContactBanner