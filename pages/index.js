import Layout from "../components/Layout";
import ContentSection from "../components/ContentSection";

import {Row, Container, Col} from "react-bootstrap"

import React from 'react';

import { FacebookProvider, Page } from 'react-facebook';
import Link from "next/link";


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
                  <h1>Aktuelles</h1>
                  <p>
                  Wir halten Sie bei Facebook regelmäßig auf dem Laufenden
              Geben Sie auch gerne ein Like bei Facebook!
            
            
              </p>
              <p>
              Natürlich können Sie unsere unsere Seite auch benutzen, wenn Sie nicht bei Facebook sind.

              </p>
                </Col>

                <Col xs="12" md="6">
                  <FacebookProvider appId="716448928794798">
                    <Page href="https://www.facebook.com/TV-77-Niederbiel-612990049042372/" tabs="timeline"/>
                  </FacebookProvider>    
                </Col>
                </Row>
              </ContentSection >
              <ContentSection header="Unsere Anlage" link="/anlage">
              <Row noGutters>


              <Col xs="12" md="6">
                  <h1>Über uns</h1>
                  <p>
                    Wir stellen uns vor.            
              </p>
              <img src="/static/clubheim_tisch.jpg" >
                  </img>

                </Col>
                <Col xs="12" md="6">

                  {
                    aboutItems.map((item) => {
                     return  <div className="link-holder"><a href="/team">{item.title}</a></div>
                    })
                  }

               
              


                  </Col>
                </Row>

              </ContentSection>
              <ContentSection header="Teams" link="/teams">
              <Row>

              <Col xs="12" md="6">
                <h1>Team-Tennis</h1>
                  <p>
                  Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. 
                  Hier können Sie sich einen Überblick verschaffen und aktuelle Ergebnisse einsehen.           
              </p>

              </Col>





                <Col xs="12" md="6">
                  <ul>
                    {}
                  <li><a href="/teams">Ergebnisse im Überblick</a></li>
                  <li><a href="/teams">Herren</a></li>
                  <li> <a href="/teams">Herren 40er</a></li>
                  <li> <a href="/teams">Herren 60er</a></li>
                  <li>  <a href="/teams">Damen</a></li>
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
              color: black
            }
            .link-holder {
            }

            

            
    
            `}
        </style>
    
      </Layout>
    )}
  }
export default Index;
