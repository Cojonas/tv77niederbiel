import React from "react"


import Banner from "../components/Banner"
function TeamCard(props) {


    return <><div className="container">
        <Banner>

            <h2 style={{color: "white"}}>{props.data.name}</h2>

            <table>
            <tr>
                <td className="important">Mannschaftsführer</td>
                <td>{props.data.leader}</td>
            </tr>
            <tr>
                <td className="important">Telefon</td>
                <td>{props.data.phoneNumber}</td>
            </tr>
            <tr>
                <td className="important">  Liga</td>
                <td>{props.data.liga}</td>
            </tr>
            <tr>
                <td className="important">Trainingszeiten</td>
                <td>{props.data.training}</td>
            </tr>


            <a href={props.data.href} className="offer-link">Ergebnisse</a>
      

            </table>
            


        </Banner>

    </div>

        <style jsx>
            {`
        .container {
            text-align:left;
            width: 100%;
            height: auto;
            background: red;
        }
        .important {
            font-weight: bold;
            padding-right: 10px;
        }
        .container img {
            width: 100%;;
        }
        span {
            width: 50%;
        }
        `}
        </style>
    </>
}
export default TeamCard