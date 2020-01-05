import Layout from "../components/Layout";
import Banner from "../components/Banner"
import DownloadCard from "../components/DownloadCard";

import { Row, Col } from "react-bootstrap"
export default function Mitglied() {
    return (
        <Layout title="Mitgliedschaft">
            <Row className="justify-content-md-center">


                <Col xs="12" md="10" lg="8">
                    <h2>
                        Werden Sie Mitglied beim Tennisverein 77 Niederbiel!
                        </h2>
                    <p>Für einen Beitritt sind die Beitrittserklärung und die Einzugsermächtigung auszufüllen.</p>
                </Col>
            </Row >
            <Row className="justify-content-md-center">
                <Col xs="12" sm="6" md="5" lg="4">
                    <DownloadCard title={"Beitrittserklärung"} href={process.env.assetPrefix + "static/Beitrittserklaerung2019.pdf"} />
                </Col>
                <Col xs="12" sm="6" md="5" lg="4">
                    <DownloadCard title={"Einzugsermächtigung"} href={process.env.assetPrefix + "static/Einzugsermaechtigung2019.pdf"} />
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col xs="12" md="10" lg="8">
                    <Banner>
                        <h2 style={{ color: "white" }}>Schnupperangebot</h2>
                        <span>Erst probieren, dann entscheiden!</span><br></br>
                        <span>Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich für eine Mitgliedschaft, zahlen Sie für das Beitrittsjahr nur die Hälfte!</span><br></br>
                    </Banner>

                </Col>
            </Row>
            <style jsx>
                {`
        .important {
            font-weight: bold;
            padding-right: 10px;
        }
        h2{
            text-transform: none;

        }
        
        `}

            </style>
        </Layout>
    );
}