import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";
import NavBox from "../components/NavBox"
import Carousel from "../components/Carousel"
import { Row, Col } from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import Galery from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Banner from "../components/Banner"
import Items from "../items.json"

function Index() {

  const generalGalery = {
    items: [
      {
        id: "1",
        picture: "/static/tennisplatz_niederbiel.jpg",
        legend: "Unsere Anlage"
      },
      {
        id: "3",
        picture: "/static/tennisplatz_platz1.jpg",
        legend: "Unsere Tennisplätze"
      },
      {
        id: "2",
        picture: "/static/clubheim_draussen.jpg",
        legend: "Das Vereinsheim"
      },
      {
        id: "3",
        picture: "/static/clubheim_drinnen.jpg",
        legend: "Unser Vereinsheim"
      },
      {
        id: "3",
        picture: "/static/clubheim_drinnen2.jpg",
        legend: "Unser Vereinsheim"
      }

    ]
  }


  const teamGalery = {
    items: [
      {
        id: "1",
        picture: "/static/teamfoto_herren.jpeg",
        legend: "Herren"
      },
      {
        id: "2",
        picture: "/static/teamfoto_damen.jpeg",
        legend: "Damen"
      }
    ]
  }

  return (
    <Layout navName="Start">


        
          <Row className="text-block justify-content-md-center" align="center">
            <Col xs="12" lg="7"  >
              <span className="bigger">Herzlich Willkommen</span>
              <p>
                beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem Laufenden. Über ein Like würden wir uns sehr freuen!
              </p>

            </Col>
            <Col xs="12" md="10" lg="8" className="padding-bottom">

              <Carousel data={generalGalery} />
            </Col>
          </Row>

          <Row className="text-block justify-content-md-center" >
            <Col xs="12">
            <h1>Aktuelles</h1>

            </Col>
            <Col xs="12" md="6" >

              <Banner>



                <h2 className="banner-header" style={{ color: "white" }} >Schnupperangebot</h2>
                <span>Erst probieren, dann entscheiden!</span><br></br>
                <span>Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich für eine Mitgliedschaft, zahlen Sie für das Beitrittsjahr nur die Hälfte!</span><br></br>

                <a href={process.env.assetPrefix + "/mitglied"} className="offer-link">zum angebot</a>

              </Banner>
              <Banner>

                <h2 className="banner-header" style={{ color: "white" }}> Vereinsheim mieten</h2>
                <span>Auch Nicht-Mitglieder können unser Vereinsheim mieten. Dieses hat Platz für ca. 50 Personen.</span><br></br>
                <span>Mit eigener Küche und moderner Theke!</span><br></br>
                <a href={process.env.assetPrefix + "/vereinsheim"} className="offer-link">Zum Angebot</a>


              </Banner>

            </Col>

            <Col xs="12" md="6" style={{ paddingTop: 10 }}>
            <center>
                <FacebookProvider appId="716448928794798">
                  <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline" />
                </FacebookProvider>
              </center>
            </Col>
          </Row>



          <Row className="justify-content-md-center">
          <Col xs="12">
          <h1>Über uns</h1>

            </Col>


            <Col xs="12" md="10" lg="8" className="ripple info-text">
              <p>
                Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen.
                    </p>

              <p>Der Ort Niederbiel gehört zur Stadt Solms und liegt wunderschön ruhig im Lahntal in der Nähe der Bundesstraße 49 zwischen Giessen im Osten und Limburg im Westen.

              </p>
              <p>Prunkstück der Anlage ist das Vereinsheim mit großem, hellen Gastraum (renoviert im Frühjahr 2008) und geräumigen Umkleideräumen für Damen und Herren mitsamt sanitären Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Grünen mit Blick auf die Plätze.

              </p>

              <a href={process.env.assetPrefix + "/about"} className="offer-link">Mehr</a>

              <NavBox items={Items.listItems.aboutItems} />
            </Col>

          </Row>


          <Row className="justify-content-md-center">
          <Col xs="12">
            <h1>Teams</h1>

            </Col>

            <Col xs="12" md="10" lg="8">
              <div >
                <p>
                  Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen.
                  Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.
                  </p>
                <a href={process.env.assetPrefix + "/teams"} className="offer-link">Übersicht</a><br></br>

              </div>


            </Col>

            <Col xs="12" md="10" lg="8">
              <Galery data={teamGalery} />
            </Col>

          </Row>





      <style jsx>
        {`
          .banner-header {
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: -2px;
            font-size: 26px;
        
          }
          .row {
            padding: 10px 0px; 
          }
              .ripple {
                  background-position: center;
                  transition: background 0.8s;
                  border-radius: 10px;
              }
              .ripple:hover {
                  background: #333 radial-gradient(circle, transparent 1%, #333 1%) center/15000%;
              }
              .ripple:active {
                  background-color: #444;
                  background-size: 100%;
                  transition: background 0s;
              }
              .accent-line {
                height: 1px;
                width: 10vh;
                background-color: #ff5c00;
                margin: 10px 0px;
              }

            .top h1 {
              padding: 200px;
              position: relative;
              z-index: 2;          
            }
            .logo-big {
              height: auto; 
              width: 30vh;
            }

              ul {
                margin: 0px;
                padding: 0px;
              }
            .box {
              position: relative; 
              top: 10px;
              opacity: 1;
              margin: auto;
            }


            a {
              width:100%;
              color: black
            }
            a:hover {
              color: black; 
              text-decoration: none;
            }
            .link-holder {
              font-size: 1.2em;
              margin: 15px; 
              padding: 5px; 
              border: 1px solid #212529;
            }


              .offer-link:hover {
                text-decoration: underline;
              }
            

            
    
            `}
      </style>

    </Layout>
  )
}

export default Index;
