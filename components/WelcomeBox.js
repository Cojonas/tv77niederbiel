
class WelcomeBox extends React.Component{

    render() {
        return <>

        <div className="border-black boxpadding">


            <img src="/static/tv77_logo_cropped.png"></img>
            <h1>TV 77 Niederbiel</h1>

            <button className="button-dark">
               Jetzt Mitglied werden
            </button><span className="tag">50% reduziert!</span>

           


        </div>

        <style jsx>
            {`
            .tag {
                display: inline-block;
              
                 width: auto;
                height: 38px;
                
                background-color: #979797;
                -webkit-border-radius: 3px 4px 4px 3px;
                -moz-border-radius: 3px 4px 4px 3px;
                border-radius: 3px 4px 4px 3px;
                
                border-left: 1px solid #979797;
            
                /* This makes room for the triangle */
                margin-left: 19px;
                
                position: relative;
                
                color: white;
                font-weight: 300;
                font-family: 'Source Sans Pro', sans-serif;
                font-size: 22px;
                line-height: 38px;
            
                padding: 0 10px 0 10px;
            }
            
            /* Makes the triangle */
            .tag:before {
                content: "";
                position: absolute;
                display: block;
                left: -19px;
                width: 0;
                height: 0;
                border-top: 19px solid transparent;
                border-bottom: 19px solid transparent;
                border-right: 19px solid #979797;
            }
            
            /* Makes the circle */
            .tag:after {
                content: "";
                background-color: white;
                border-radius: 50%;
                width: 4px;
                height: 4px;
                display: block;
                position: absolute;
                left: -9px;
                top: 17px;
            }
            img {
                width: 150px; 
                height: 150px;
            }
            h1 {
                color: white;
                font-size: 60px;
                font-family: Chalkduster;
            }

            p  {
                font-size: 10px;
                text-align: left;
            }

     
            `}
        </style>



        </>
    }
}


export default WelcomeBox