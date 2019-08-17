import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";

import {Row, Container, Col} from "react-bootstrap"
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';


class Index extends React.Component{

    constructor(props){
      super(props)
    }

  


    render() {
      const aboutItems = [
        {
          title: "Ergebnisse im überblick"
        },
        {
          title: "Der Vorstand"
        },
        {
          title: "Kontakt"
        },
        {
          title: "Über uns"
        },
      ]
    return (
      <Layout navName="Start">

        <div className="content-container">
          <center>
          <Container >
          <Row noGutters>
            <ContentSection header="Aktuelles" link="/about">
              <Row>

                <Col xs="12" md="6">
                <div className="border-left-thick">

                  <h1>Aktuelles</h1>
                  <p>
                  Wir halten Sie bei Facebook regelmäßig auf dem Laufenden
              Geben Sie auch gerne ein Like bei Facebook!
            
            
              </p>
              <p>
              Natürlich können Sie unsere unsere Seite auch benutzen, wenn Sie nicht bei Facebook sind.

              </p>
              </div>
                </Col>

                <Col xs="12" md="6">
                  <FacebookProvider appId="716448928794798">
                    <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline"/>
                  </FacebookProvider>    
                </Col>
                </Row>
              </ContentSection >
              <ContentSection header="Unsere Anlage" link="/anlage">
              <Row >


              <Col xs="12" md="6">
              <div className="border-left-thick">

                  <h1>Über uns</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.              </p>
                  </div>
              <img src="/static/clubheim_tisch.jpg" >
                  </img>

                </Col>
                <Col xs="12" md="6">
                  <ul>
                    {
                      aboutItems.map((item) => {
                      return  <h1 className="link-holder fromLeft"><a href="/team">{item.title}</a></h1>
                      })
                    }
                  </ul>
                  

               
              


                  </Col>
                </Row>

              </ContentSection>
              <ContentSection header="Teams" link="/teams">
              <Row>

              <Col xs="12" md="6">
                <div className="border-left-thick">
                  <h1>Team-Tennis</h1>
                    <p>
                    Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. 
                    Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.           
                </p>

                </div>
              
              </Col>





                <Col xs="12" md="6">
                <ul>
                    {
                      aboutItems.map((item) => {
                      return  <h1 className="link-holder fromLeft"><a href="/team">{item.title}</a></h1>
                      })
                    }
                  </ul>
                  
                  </Col>
              </Row>
              </ContentSection>
          </Row>
          </Container>
          </center>
    </div>

     

        <style jsx>
          {`

              .content-container {
                max-width: 900px;
                margin: auto;
                background-color: white;
                -webkit-box-shadow: 0px 6px 37px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 6px 37px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 6px 37px 0px rgba(0,0,0,0.75);

                position: relative;
                top: -20px;
            

              }
              .border-left-thick {
                border-left: 5px solid #ff5c00;
                padding-left: 20px;

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
              -webkit-box-shadow: 2px 1px 7px 1px rgba(0,0,0,0.61); 
              box-shadow: 2px 1px 7px 1px rgba(0,0,0,0.61);

            }
            

            
    
            `}
        </style>
    
      </Layout>
    )}
  }
export default Index;
