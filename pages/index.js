import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";

import {Row, Container, Col} from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Index extends React.Component{

    constructor(props){
      super(props)
    }

  


    render() {
      const aboutItems = [
        {
          title: "Über uns "
        },
        {
          title: "Die Anlage"
        },
        {
          title: "Anfahrt"
        },
        {
          title: "Kontakt"
        },
        {
          title: "Unser Vorstand"
        },
        {
          title: "Mitglied werden"
        }
      ]
      const teams =  [
        {
          title: "Ergebnisse im Überblick"
        },
        {
          title: "Damen"
        },
        {
          title: "Herren"
        },
        {
          title: "Herren 40"
        },
        {
          title: "Herren 50"
        },
        {
          title: "Herren 60"
        },
      ]
      const aktuelles =  [
       
        {
          title: "Facebook"
        },
        {
          title: "Veranstaltungen"
        },
        {
          title: "Schnupperangebote"
        },
      ]
    return (
      <Layout navName="Start">
        <div className="top">
          <Container>
            <center>
              <img className="logo-big" src={process.env.assetPrefix + "static/tv77_logo_cropped.png"} />

              <div className="accent-line"></div>
              <h2>Herzlich Willkommen</h2>

            </center>
            
          </Container>
        </div>

        <div className="content-containerx">
          <center>
          <Container >

          <Row noGutters>
            <ContentSection header="Aktuelles" link="/about">
              <Row>

                <Col xs="12" md="6">

                  <h1>Aktuelles</h1>
                  <p>
                  Herzlichen Willkommen beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem laufenden. Über ein Like würden wir sehr freuen !             
            
              </p>
              <p>
              Natürlich können Sie unsere unsere Seite auch benutzen, wenn Sie nicht bei Facebook sind.

              </p>

              </Col>
              <Col xs="12" md="6">
                <div className="border-left-thick">
                  <ul>
                    {
                      aktuelles.map((item) => {
                      return  <h1 className="link-holder fromLeft"><a href="/team">>{item.title}</a></h1>
                      })
                    }
                  </ul>
              </div>
              </Col>



                </Row>
                <Row className="justify-content-md-center">
                    <Col col="12" md="6">
                      <FacebookProvider appId="716448928794798">
                        <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline"/>
                      </FacebookProvider> 
                    </Col>
                </Row>

              </ContentSection >
              <ContentSection header="Unsere Anlage" link="/anlage">
              <Row >

              <Col xs="12" md="6">

                  <h1>Über uns</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.              </p>


                </Col>
                <Col xs="12" md="6">
                <div className="border-left-thick">

                  <ul>
                    {
                      aboutItems.map((item) => {
                      return  <h1 className="link-holder fromLeft"><a href="/team">{item.title}</a></h1>
                      })
                    }
                  </ul>
                  

               </div>
              


                  </Col>
                </Row>

              </ContentSection>
              <div style={{"padding": "30px"}}> 


              <Carousel >
            
         
          <div>
            <img src="static/clubheim_drinnen.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="static/clubheim_drinnen2.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="static/teamfoto_herren.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
   
            </Carousel>
              </div>


              <ContentSection header="Teams" link="/teams">
              <Row>

              <Col xs="12" md="6">
                  <h1>Teams</h1>
                    <p>
                    Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. 
                    Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.           
                </p>

              
              </Col>





                <Col xs="12" md="6">
                <div className="border-left-thick">

                <ul>
                    {
                      teams.map((item) => {
                      return  <h1 className="link-holder fromLeft"><a href="/team">{item.title}</a></h1>
                      })
                    }
                  </ul>
                  </div>

                  </Col>
              </Row>
              </ContentSection>
          </Row>
          </Container>
          </center>
    </div>

     

        <style jsx>
          {`
             
              
              /* Fix for IE10 */
              .carousel  {
                width: 100% !important;
                max-height: 100% !important;
              }
              
              .content-container {
                position: relative;
                top: -20px;
            
              }
              .accent-line {
                height: 1px;
                width: 10vh;
                background-color: #ff5c00;
                margin: 10px 0px;
              }
              .top {
                background-color: #212529;
                background-position: center;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                width: 100%; 
                height: auto;
                padding: 15px;
                z-index:1000;
                color: white;
                text-align: center;

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

            .welcome-enter {
              top: -1000px;
            }
            .welcome-enter-active {
              top: 10px;
              transition: top 200ms
            }
            .welcome-exit {
              opacity: 1;
            }
            .welcome-exit-active {
              opacity: 0;
              transition: opacity 1000ms;
            }
            .welcome-exit-done {
              opacity: 0; 
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
    )}
  }
export default Index;
