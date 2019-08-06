import Layout from "../components/Layout";
import WelcomeBox from "../components/WelcomeBox";
import ContentSection from "../components/ContentSection";

import {Row, Container, Button} from "react-bootstrap"

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import "../styles.css"


function Index(){

  const [showWelcome, setShowWelcome] = useState(false);

    return (
      <Layout>
        <div className="front-page-background">
    
    
    
          <center>    
          <Button
          onClick={() => setShowWelcome(true)}
          size="lg"
        >
          Show Messagefalse
        </Button>
      

        <CSSTransition
              in={showWelcome}
              timeout={5000}
              classNames="welcome"
              unmountOnExit
            >
      

            <div className="welcome-box">

       
              <WelcomeBox />


            </div>


            </CSSTransition>
           </center>
        </div>
    
    
        <div className="content-container">
          <center>
          <Container fluid>
    
          <Row>
    
            <ContentSection header="Über uns" link="/about">
            Der Ort Niederbiel gehört zur Stadt Solms  Externer Link und liegt wunderschön ruhig im Lahntal in der Nähe der Bundesstraße 49 zwischen Giessen im Osten und Limburg im Westen. 
    Zunächst legte man auf dem vereinseigenen Gelände etwas abseits der Wohngebiete zwei Sandplätze an (Fertigstellung im Juli 1978), bevor man im August 1980 das Clubhaus einweihen konnte. Im Frühjahr 1981 wurde die Anlage schließlich durch den Bau zweier weiterer Plätze vervollständigt. Seither sorgen die Vereinsmitglieder größtenteils selbst für die Pflege der Anlage, wobei die Plätze ab dem Jahr 2015 vollständig durch eine Fachfirma spielbereit gemacht werden.
    
    
              </ContentSection >
    
              <ContentSection header="Unsere Anlage" link="/anlage">
    
    
              </ContentSection>
              <ContentSection header="Aktuelles">
    
    
              </ContentSection>
    
          </Row>
    
    
          </Container>
          </center>
    
    
        </div>
    
    
    
        <style jsx>
          {`
              .front-page-background {
                height:70vh;
                width:auto;
                background-color: #11161f;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
              
              }



              .content-container {
                max-width: 700px;
                margin: auto;
              }
    
    
  .welcome-box {
    
    padding-top: 200px;
    opacity: 1;
  }
            
    
            `}
        </style>
    
      </Layout>
    );
  }
export default Index;
