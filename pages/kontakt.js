import Layout from "../components/Layout"
import ContactBanner from "../components/ContactBanner"
import SocialMedia from "../components/SocialMedia"
import { Row, Col } from "react-bootstrap"

const About = props => {
  return (
    <Layout title="Kontakt" >
      

      <div className="text-left">

        <Row>
        <Col cols="12" md="6">
          <ContactBanner name="Uwe Schneider"  phone="+49 163 7575518" mail="info@tv-niederbiel.de"/>

          <ContactBanner name="Stefan Jackwerth"  phone="+49 160 96309623" mail="info@tv-niederbiel.de"/>
          </Col>

          <Col cols="12" md="6" style={{paddingTop: 10}}>
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