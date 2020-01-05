import Layout from "../components/Layout";
import DownloadCard from "../components/DownloadCard";
import { Row, Col } from "react-bootstrap"
import React from 'react';
export default function Downloads() {
    return (
        <Layout title="Downloads">
            <p>Hier finden Sie alle Downloads</p>
            <Row>
                <Col xs="6" sm="6" md="6" lg="3">
                    <DownloadCard title={"Datenschutzerklärung"} href={process.env.assetPrefix + "static/Datenschutzerklaerung_TV77_Niederbiel.pdf"} />
                </Col>
                <Col xs="6" sm="6" md="6" lg="3">
                    <DownloadCard title={"Datenschutz im TV 77"} href={process.env.assetPrefix + "static/Datenschutz_TV77_Niederbiel.pdf"}/>
                </Col>
                <Col xs="6" sm="6" md="6" lg="3">
                    <DownloadCard title={"Einzugsermächtigung"} href={process.env.assetPrefix + "static/Einzugsermaechtigung2019.pdf"}/>
                </Col>
                <Col xs="6" sm="6" md="6" lg="3">
                    <DownloadCard title={"Beitrittserklärung"} href={process.env.assetPrefix + "static/Beitrittserklaerung2019.pdf"}/>
                </Col>
            </Row>

        </Layout>
    );
}