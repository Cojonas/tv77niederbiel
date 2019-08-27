import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";
import NavBox from "../components/NavBox"
import Carousel from "../components/Carousel"
import {Row, Col} from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Galery from "../components/Carousel";
import Banner from "../components/Banner"
import Items from "../items.json"

function Index (){

    return (
      <Layout navName="Start">



            <Row noGutters>
              <ContentSection header="Aktuelles" link="/about">
                <Row>

                  <Col cols="12" md="6" className="padding-bottom">

                    <p>
                    <span className="bigger">Herzlich Willkommen</span> beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem laufenden. Über ein Like würden wir sehr freuen !             

                      </p>

                    <Banner>

                      <h2>Clubheim mieten</h2>
                      <span>Großräumige Feierlocation</span><br></br>
                      <span>Mit eigener Küche und Theke</span><br></br>
                      <a href="/clubheim" className="offer-link">Mehr infos</a>

                    </Banner>


                    <Banner>

                      <h2>Schnupperkurse</h2>
                      <span>Mietgliedschaft 1 Jahr gratis!</span><br></br>
                      <span>Inklusive Trainerstunde</span><br></br>

                      <a href="/schnuppern" className="offer-link">zum angebot</a>

                    </Banner>



                    <NavBox items={Items.listItems.aktuelles}/>


                  </Col>
                  <Col cols="12" md="6"  className="padding-bottom">
                  <Carousel />


                  </Col>


                </Row>

              </ContentSection >
              <ContentSection header="Unsere Anlage" link="/anlage">
                <Row >
                <Col xs="12" md="6" className="padding-bottom">
                    <center>
                      <FacebookProvider appId="716448928794798">
                          <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline"/>
                      </FacebookProvider> 
                    </center>
                  </Col>

                  <Col xs="12" md="6" className="padding-bottom">
                    <h1>Über uns</h1>
                    <p>
                    Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 150 Mitgliedern, wovon gut 50% aktiven Status besitzen (Stand 01.01.2017).
                    </p>

                    <p>Der Ort Niederbiel gehört zur Stadt Solms und liegt wunderschön ruhig im Lahntal in der Nähe der Bundesstraße 49 zwischen Giessen im Osten und Limburg im Westen.

</p>
<p>Prunkstück der Anlage ist das vereinseigene Clubhaus mit großem, hellen Gastraum (renoviert im Frühjahr 2008) und geräumigen Umkleideräumen für Damen und Herren mitsamt sanitären Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Grünen mit Blick auf die Plätze.

</p>

                    <a href="/about" className="offer-link">Mehr</a>

<NavBox items={Items.listItems.aboutItems} />
                  </Col>
                </Row>

              </ContentSection>

              <ContentSection header="Teams" link="/teams">
            <Row>

              <Col xs="12" md="6">
                  <h1>Teams</h1>
                  <p>
                  Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. 
                  Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.           
                  </p>
                  <a href="/schnuppern" className="offer-link">Übersicht</a><br></br>
                  <a href="/schnuppern" className="offer-link">Damen</a><br></br>
                  <a href="/schnuppern" className="offer-link">Herren</a><br></br>
                  <a href="/schnuppern" className="offer-link">Herren 40</a><br></br>
                  <a href="/schnuppern" className="offer-link">Herren 50</a><br></br>
                  <a href="/schnuppern" className="offer-link">Herren 60</a><br></br>
                  <NavBox items={Items.listItems.teams}/>


              
              </Col>

              <Col xs="12" md="6">
                <Galery />

              </Col>
              </Row>

              </ContentSection>
          </Row>
   

     

        <style jsx>
          {`
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

            .offer-link {
                font-size: 15px ; 
                color:  #ff5c00 !important;
                text-transform: uppercase;
              }

              .offer-link:hover {
                text-decoration: underline;
              }

              .bigger {
                font-size: 40px;
                font-weight: bold;
                letter-spacing: -2.9px;
                color: #ff5c00;
              }
            

            
    
            `}
        </style>
    
      </Layout>
    )
  }
  
export default Index;
