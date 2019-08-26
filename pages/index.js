import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";
import NavBox from "../components/NavBox"
import Carousel from "../components/Carousel"
import {Row, Container, Col} from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Galery from "../components/Carousel";

import Items from "../items.json"

function Index (){

    return (
      <Layout navName="Start">

      <div className="top">
      <img className="img-background" src="static/tennis_court_sand.jpg">
        </img>

        <center>

          <img className="img-foreground" src="static/logo_white.png" />

        </center>
        


      </div>
        <center>

            <div className="content-box">




            <Row noGutters>
              <ContentSection header="Aktuelles" link="/about">
                <Row>

                  <Col cols="12" md="6" lg="7" xl="8" className="padding-bottom">

                    <h1>Aktuelles</h1>
                    <p>
                    Herzlichen Willkommen beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem laufenden. Über ein Like würden wir sehr freuen !             

                      </p>
                      <p>
                      Natürlich können Sie unsere unsere Seite auch benutzen, wenn Sie nicht bei Facebook sind.
                    </p>
                    <NavBox items={Items.listItems.aktuelles}/>


                  </Col>
                  <Col cols="12" md="6" lg="5" xl="4" className="padding-bottom">
                    <center>
                      <FacebookProvider appId="716448928794798">
                          <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline"/>
                      </FacebookProvider> 
                    </center>

                  </Col>


                </Row>

              </ContentSection >
              <ContentSection header="Unsere Anlage" link="/anlage">
                <Row >
                  <Col xs="12" className="padding-bottom">
                    <h1>Über uns</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.              </p>
                    <NavBox items={Items.listItems.aboutItems} />
                  </Col>
                  <Col xs="12"  className="padding-bottom">
                    <Carousel />
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
                  <NavBox items={Items.listItems.teams}/>

              
              </Col>

              <Col xs="12" md="6">
                <Galery />

              </Col>
              </Row>

              </ContentSection>
          </Row>
          </div>


          </center>

     

        <style jsx>
          {`
              .content-box {
                -webkit-box-shadow: 5px 3px 15px -5px #000000; 
                box-shadow: 5px 3px 15px -5px #000000;
                background: #444;
                padding: 10px 20px;
                
                margin: 0px 0px;
                
                max-width: 1024px;
                z-index: 1400;
              }
              .accent-line {
                height: 1px;
                width: 10vh;
                background-color: #ff5c00;
                margin: 10px 0px;
              }
              .top {

                background-size: cover;
                position: fixed;
                overflow: hidden;
                height: 100vh ;
                padding-top: 50px;
                width: 100%;
                color: white;
                text-align: center;

            }
            .top .img-background {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              opacity: 0.3;
            }
            .top  .img-foreground {
              height: 200px; 
              padding: 10px;
              width: auto; 
              opacity: 1;
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

              .border-left-thick {

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
            

            
    
            `}
        </style>
    
      </Layout>
    )
  }
  
export default Index;
