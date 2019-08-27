import React from "react"
import {Icon} from "antd"

function ContactBanner(props) {

    return (
        <div className="contact">
            <p> {props.name}  </p>

            <div className="contact-icon" >
                <Icon type="phone" /> {props.phone}
          
    </div>

            <div className="contact-icon" >
                <Icon type="mail" /> {props.mail}
    </div>
    <style jsx>

{`       
    .contact  {
        border: 1px solid black;  
        background: #222;
        padding: 10px;
        margin: 5px;
    }
    .contact-icon {
        height: 50px; 
        width: auto;
        padding: 5px 15px;
    }
    p {
        padding: 0px 10px;
        font-weight: bold;
    }
`}
</style>


        </div>

    )

}

export default ContactBanner