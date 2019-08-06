
class WelcomeBox extends React.Component{

    render() {
        return <>

        <div className="border-black boxpadding">


            <img src="/static/tv77_logo_cropped.png"></img>
            <h1>TV 77 Niederbiel</h1>

            <button className="button-bright">
                Schnupperkurse
            </button>
            <button className="button-bright">
                Mitglied werden
            </button>



        </div>

        <style jsx>
            {`
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