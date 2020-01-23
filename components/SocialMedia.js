


function SocialMedia(props) {

    return <>
        <div>
            <center>
                <a href="https://m.facebook.com/TV-77-Niederbiel-612990049042372/" className={!props.visible ? "fa fa-facebook notExpanded" : "fa fa-facebook expanded"}></a>
                <a href="https://goo.gl/maps/gRBMY1v6G6oGcsi69" className="fa fa-google" className={!props.visible ? "fa fa-google notExpanded" : "fa fa-google expanded"}></a>
                <a href="mailto:info@tv-niederbiel.de" className="fa fa-envelope" className={!props.visible ? "fa fa-envelope notExpanded" : "fa fa-envelope expanded"}></a>
            </center>
        </div>

        <style jsx>
            {`

                /* Style all font awesome icons */
                .fa {
                    padding: 10px;
                    margin: 10px;
                    font-size: 30px;
                    width: 50px;
                    height: 50px
                    text-align: center;
                    text-decoration: none;
                    border-radius: 50%;
                    transform: scale(1); 
                    transition: transform 500ms;
                    transition-delay: 500ms;
                }

                .notExpanded {
                    transform: scale(0);
                }

                

                .expanded {
                    transform:: scale(1);
                }

                /* Add a hover effect if you want */
                .fa:hover {
                opacity: 0.7;
                }

                /* Set a specific color for each brand */

                /* Facebook */
                .fa-facebook {
                background: #3B5998;
                color: white;
                }

                .fa-google {
                    background: #dd4b39;
                    color: white;
                  }

                /* Twitter */
                .fa-envelope {
                background: #55ACEE;
                color: white;
                }


                            
            `}
        </style>

    </>

}


export default SocialMedia;