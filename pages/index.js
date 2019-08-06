import Layout from "../components/Layout";
import WelcomeBox from "../components/WelcomeBox";
import ContentSection from "../components/ContentSection";

import {Row, Container, Button} from "react-bootstrap"

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


class Index extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        showWelcome: false
      }
    }

    componentDidMount(){
      this.setShowWelcome(true)
    }

    setShowWelcome(value){
      this.setState({showWelcome: value})
    }

    hideWelcome(){
      this.setShowWelcome(false);
    }

    render() {

    return (
      <Layout onScrollDownTop={ () => this.hideWelcome}>
        <div className="front-page-background">
          <center>    
            
        <CSSTransition
              in={this.state.showWelcome}
              timeout={1000}
              classNames="welcome"
              unmountOnExit
              onEnter={() => this.setShowWelcome(true)}
            >
            <div className="box">
                <WelcomeBox />
                <Button onClick={() => this.setShowWelcome(false)}
        >
        hide 
      </Button>
                </div>
            </CSSTransition>
            <div className="box">
            <Button onClick={() => this.setShowWelcome(true)}
        >
        show 
      </Button>
              </div>
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
              <ContentSection header="Aktuelles" link="/anlage">
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
    
            .box {
              position: relative; 
              top: 200px;
              opacity: 1;
              margin: auto;
            }

            .welcome-enter {
              top: -1000px;
            }
            .welcome-enter-active {
              top: 200px;
              transition: top 1000ms;
            }
            .welcome-exit {
              opacity: 1;
            }
            .welcome-exit-active {
              opacity: 0;
              transition: opacity 200ms;
            }

            
    
            `}
        </style>
    
      </Layout>
    )}
  }
export default Index;
