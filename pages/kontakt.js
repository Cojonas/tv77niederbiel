import Layout from "../components/Layout"
import ContactBanner from "../components/ContactBanner"
import { Row, Col } from "react-bootstrap"
const About = props => {
  return (
    <Layout>
      <h1>Kontakt</h1>


      <div className="text-left">

        <Row>
        <Col cols="12" md="6">
          <ContactBanner name="Uwe Schneider"  phone="06442 12345" mail="uweschneider@gmx.de"/>

          <ContactBanner name="Stefan Jackwert"  phone="06442 54321" mail="jacko@gmx.de"/>
          </Col>

          <Col cols="12" md="6">
            <h2>Postadresse</h2>
            <p>Tennisverein 77 Niederbiel e.V.<br></br>
              c/o Uwe Schneider<br></br>
              Bodenstr. 32<br></br>
              35606 Niederbiel
            </p>

            <h2>Anlagenadresse</h2>
            Berghäuser Str.<br></br>
            35606 Niederbiel<br></br>
            Telefon Clubhaus: 06442-8383

            <br></br>
            <h2>Vorstandsmitglieder</h2>

            <p>
            <table>
            <tr>
                <td className="important">1. Vorstand</td>
                <td>Uwe Schneider</td>
            </tr>

            <tr>
                <td className="important">2. Vorstand</td>
                <td>Stefan Jackwerth</td>
            </tr>

            <tr>
                <td className="important">Kassierer</td>
                <td>Simon Rink</td>
            </tr>

            <tr>
                <td className="important">Schriftführer</td>
                <td>Stefan Herherth</td>
            </tr>

            <tr>
                <td className="important">Sportwart</td>
                <td>Steffen Klinkel</td>
            </tr>

            <tr>
                <td className="important">1. Beisitzer</td>
                <td>Thilo Junker</td>
            </tr>


            <tr>
                <td className="important">2. Beisitzer</td>
                <td>Martin Weiss</td>
            </tr>


      

            </table>
            </p>
          

          </Col>
        </Row>
      </div>

      <style jsx>
        {`
        .text-left {
          text-align: left;
        }
        .important {
          font-weight: bold;
          padding-right: 10px;
      }

        `}
      </style>
    </Layout>
  );
}

export default About