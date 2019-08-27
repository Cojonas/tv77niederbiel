import Layout from "../components/Layout";
import Banner from "../components/Banner"
import { Row, Col } from "react-bootstrap"
export default function Mitglied() {
    return (
        <Layout>
            <div className="text-left">
                <Row>

                    <Col cols="12" md="6">
                        <p>
                            <span className="bigger">Werden Sie Mitglied</span> beim Tennisverein 77 Niederbiel!
                        </p>
                        <p>Für einen Beitritt sind die <a href={process.env.assetPrefix +"static/Beitrittserklaerung2019.pdf"}>Beitrittserklärung</a> und die <a href={process.env.assetPrefix + "static/Einzugsermaechtigung2019.pdf"}>Einzugsermächtigung</a> auszufüllen</p>




                    </Col>
                    <Col cols="12" md="6">
                        <Banner>

                            <h2>Schnupperangebot</h2>
                            <span>Mietgliedschaft 1 Jahr gratis!</span><br></br>
                            <span>Inklusive Trainerstunde</span><br></br>

                            <span href={process.env.assetPrefix + "/contact-us"} className="offer-link">Sprechen Sie uns dazu einfach beim Abgeben der Beitrittserklärung an!</span>
                        </Banner>

                    </Col>
                </Row>
            </div>
        <style jsx>
        {`
        .important {
            font-weight: bold;
            padding-right: 10px;
        }`}

        </style>
        </Layout>
    );
}