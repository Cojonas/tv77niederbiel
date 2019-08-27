import Layout from "../components/Layout";
import {Row, Col} from "react-bootstrap"
export default function Impressum() {
    return (
      <Layout>
          <h1>Impressum</h1>
          <Row className="text-left">


          <Col cols="12" md="6">
            <h2>Vereinsanschrift</h2>
            <p>Tennisverein 77 Niederbiel e.V.<br></br>
              c/o Uwe Schneider<br></br>
              Bodenstr. 32<br></br>
              35606 Niederbiel
        </p>
        <span>Vertretungsberechtigter Vorstand: Uwe Schneider (1. Vorsitzender),</span><br></br>

        <span>Stefan Jachwerth (2. Vorsitzender), Simon Rink (Kassierer)</span><br></br>

        <span>Registergericht: Amtsgericht Wetzlar</span><br></br>
        <span>Vereinsregisternummer: 893

            </span>
        






          </Col>
          <Col cols="12" md="6">
          <h2>Datenschutz</h2>
          <p><a href={ process.env.assetPrefix + "static/Datenschutzerklaerung_TV77_Niederbiel.pdf"}>Datenschutzerklärung</a></p>
          <p><a href={process.env.assetPrefix + "static/Datenschutz_TV77_Niederbiel.pdf"}>Datenschutz im TV 77 Niederbiel</a></p>



          </Col>
          <Col cols="12" md="6">
          <h2>Webmaster</h2>
          <p>          
              <span>Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV:</span></p>
        <span>Jonas Strunz</span><br></br>
        <span>Tannenweg 17a</span><br></br>
        <span>35606 Solms</span><br></br>
        <span>015757118999
            </span>

          </Col>
        </Row>

      </Layout>
    );
  }