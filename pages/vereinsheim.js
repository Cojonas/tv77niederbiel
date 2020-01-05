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
        <Layout title="Unser Vereinsheim" pictures={[{picture: "/static/clubheim_draussen.jpg"}]}>

            <Row>
                <Col cols="12" md="6">
                    <Galery data={galery} />

                </Col>
                <Col cols="12" md="6">

                    <Banner>
                        <h2 >
                            Öffnungszeiten
                        </h2>
                        <p>Montag, Dienstag, Freitag, Samstag und Sonntag ab 18 Uhr mit eigener Bewirtung!</p>
                        <p>Nur in den Monaten Mai bis einschließlich September</p>
                    </Banner>

                </Col>


            </Row>

            <Row className="justify-content-md-center">
                <Col cols="12" md="10" lg="8">

                    <p>
                        <span className="bigger">Mieten Sie unser Vereinsheim!</span>
                    </p>
                    <p>
                        Wir stellen Ihnen unser Vereinsheim zur Verfügung. Auch Nicht-Mitglieder können das Vereinsheim mieten.
                    </p>
                    <p>
                        Die schön gelegene Location mit moderner Theke und eigener Küche bietet Platz für bis zu 50 Personen im Innenbereich. Außen befindet sich eine schöne Terrasse, auf der optional ein Pavillon aufgebaut werden kann. Geschirr und Besteck sind ebenfalls vorhanden.
                    </p>
                    <p>Gerne können Sie einen Besichtigungstermin nach Wunsch ausmachen.</p>

                    <ContactBanner name="Thilo Junker" phone="+49 171 6408085" />
                    <ContactBanner name="Stefan Jackwerth" phone="+49 160 96309623" />



                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col cols="12" md="10" lg="8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.6340800385597!2d8.396305965917366!3d50.559574537376655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc45eea5e3ac5f%3A0x37eff8c2874dfbc3!2sTennisverein%2077%20Niederbiel!5e0!3m2!1sen!2sus!4v1569541915015!5m2!1sen!2sus" width="100%" height="400" frameborder="1" style={{ border: 0 }} allowfullscreen=""></iframe>            <br></br>

                </Col>
            </Row>
        </Layout>
    )
}