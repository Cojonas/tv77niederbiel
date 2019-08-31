import React from "react"
import Layout from "../components/Layout"
import Galery from "../components/Carousel"
import Banner from "../components/Banner"
import ContactBanner from "../components/ContactBanner"
import { Row, Col } from "react-bootstrap"

import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Vereinsheim() {

    const galery = {
        items: [
            {
                id: "3",
                picture: "/static/clubheim_drinnen2.jpg",
                legend: "Das Vereinsheim von innen"
            },
            {
                id: "4",
                picture: "/static/clubheim_drinnen.jpg",
                legend: "Das Vereinsheim von innen"
            },
            {
                id: "1",
                picture: "/static/clubheim_draussen.jpg",
                legend: "Der Außenbereich"
            },
            {
                id: "5",
                picture: "/static/clubheim_feier.jpg",
                legend: "Das Vereinsheim"
            },
            {
                id: "6",
                picture: "/static/clubheim_feier2.jpg",
                legend: "Das Vereinsheim"
            },
            {
                id: "7",
                picture: "/static/clubheim_feier3.jpg",
                legend: "Das Vereinsheim"
            },



        ]
    }

    return (
        <Layout >
            <Row style={{ textAlign: "left" }}>
                <Col cols="12" md="6">
                    <p>
                        <span className="bigger">Mieten Sie unser Vereinsheim!</span>
                    </p>
                    <p>
                        Wir stellen Ihnen unser Vereinsheim zur Verfügung. Auch Nicht-Mitglieder können das Vereinsheim mieten.
                    </p>
                    <p>
                        Die schön gelegene Location mit moderner Theke und eigener Küche bietet Platz für bis zu 50 Personen im Innenbereich. Außen befindet sich eine schöne Terasse, auf der optional ein Pavillon aufgebaut werden kann. Geschirr und Besteck sind ebenfalls vorhanden.
                    </p>
                    <p>Gerne können Sie einen Besichtigungstermin nach Wunsch ausmachen.</p>

                    <ContactBanner name="Thilo Junker" phone="+49 171 6408085"/>
                    <ContactBanner name="Stefan Jackwerth" phone="+49 160 96309623"/>

                </Col>
                <Col md="12" lg="6">
                    <Galery data={galery} />
                </Col>


            </Row>
        </Layout>
    )
}