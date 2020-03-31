import Layout from "../components/Layout";
import NavBox from "../components/NavBox";
import SocialMedia from "../components/SocialMedia";
import { Row, Col } from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import Galery from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Calendar from "../components/Calendar"
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
        id: "4",
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
    <Layout navName="Start" title="Herzlich Willkommen beim TV77 Niederbiel!" pictures={generalGalery.items}>

      <div >
        <SocialMedia visible={true}  ></SocialMedia>
      </div>

      <Row className="text-block justify-content-md-center">
        {/*
 
 */}
        
        <Col xs="12" md="6" >
          <Calendar />

          <Banner>
            <h2 >Schnupperangebot</h2>
            <span>Erst probieren, dann entscheiden!</span><br></br>
            <span>Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich für eine Mitgliedschaft, zahlen Sie für das Beitrittsjahr nur die Hälfte!</span><br></br>

            <a href={process.env.assetPrefix + "/mitglied"} className="offer-link">zum angebot</a>

          </Banner>
          <Banner>

            <h2  > Vereinsheim mieten</h2>
            <span>Auch Nicht-Mitglieder können unser Vereinsheim mieten. Dieses hat Platz für ca. 50 Personen.</span><br></br>
            <span>Mit eigener Küche und moderner Theke!</span><br></br>
            <a href={process.env.assetPrefix + "/vereinsheim"} className="offer-link">Zum Angebot</a>
          </Banner>

        </Col>
        <Col xs="12" md="6" >
        <FacebookProvider appId="716448928794798" >
                <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline" smallHeader={true} hideCover={true}/>
              </FacebookProvider>
        </Col>
      </Row>

      <Row className="justify-content-md-center">

        <Col xs="12">
          <h1>Über uns</h1>

        </Col>

        <Col xs="12" md="6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.6340800385597!2d8.396305965917366!3d50.559574537376655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc45eea5e3ac5f%3A0x37eff8c2874dfbc3!2sTennisverein%2077%20Niederbiel!5e0!3m2!1sen!2sus!4v1569541915015!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="1" 
            style={{ border: 0, padding: "0px 0px 15px 0px " }} 
            allowFullScreen=""></iframe>
        </Col>

        <Col xs="12" md="6" >
          <p>
            Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen.
          </p>

          <p>
            Der Ort Niederbiel gehört zur Stadt Solms und liegt wunderschön ruhig im Lahntal in der Nähe der Bundesstraße 49 zwischen Giessen im Osten und Limburg im Westen.
          </p>
          <p>
            Prunkstück der Anlage ist das Vereinsheim mit großem, hellen Gastraum (renoviert im Frühjahr 2008) und geräumigen Umkleideräumen für Damen und Herren mitsamt sanitären Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern - ist der Freisitz des Vereinsheims im Grünen mit Blick auf die Plätze.
          </p>

          {/*
          <a href={process.env.assetPrefix + "/about"} className="offer-link left">Mehr</a>
          */}
        </Col>
      </Row>

      <Row className="justify-content-md-center">

        <Col xs="12" >
          <h1>Teams</h1>
        </Col>

        <Col xs="12" md="6" >
          <div >
            <p>
              Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen.
              Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.
                  </p>
            {/*
                              <a href={process.env.assetPrefix + "/teams"} className="offer-link left">Übersicht</a><br></br>

                  */}
          </div>
        </Col>

        <Col xs="12" md="6" >

          <Galery data={teamGalery} />
        </Col>

      </Row>

      <style jsx>
        {`
          .toprowGallery {
            background: #555 !important;
            height: 500px;
            width: 100%;
          }
          .socialButton {
            margin: 50px;
            background: url("/static/facebook.png");
          }
          .img-top {
            margin-top: -50px;
            height: 200px; 
            width: auto; 
          }
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
              .offer-link.left {
                float: left !important;
              }
            


    
            `}


      </style>

    </Layout>
  )
}

export default Index;
