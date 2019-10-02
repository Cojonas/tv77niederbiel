import Layout from "../components/Layout";
import Galery from "../components/Carousel"
import { Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function About() {

  const generalGalery = {
    items: [
      {
        id:"1",
        picture: "/static/tennisplatz_niederbiel.jpg",
        legend: "Unsere Anlage"
      },
      {
        id:"2",
        picture: "/static/clubheim_draussen.jpg",
        legend: "Das Vereinsheim"
      },
      {
        id:"3",
        picture: "/static/tennisplatz_platz1.jpg",
        legend: "Unsere Tennisplätze"
      },
      {
        id:"4",
        picture: "/static/clubheim_tisch.jpg",
        legend: "Das Vereinsheim"
      }

    ]
  }

  return (
    <Layout>
      <h1>Über uns</h1>
      <div className="text-block">
        
      <Row>
        <Col md="12" lg="6">
        
        <span className="bigger">Unsere Anlage</span> liegt ruhig am Ortsrand von Niederbiel und bietet dem Aktiven vier stets gut bespielbare Sandplätze.
        <p>Zunächst legte man auf dem vereinseigenen Gelände etwas abseits der Wohngebiete zwei Sandplätze an (Fertigstellung im Juli 1978), bevor man im August 1980 das Clubhaus einweihen konnte. Im Frühjahr 1981 wurde die Anlage schließlich durch den Bau zweier weiterer Plätze vervollständigt. Seither sorgen die Vereinsmitglieder größtenteils selbst für die Pflege der Anlage, wobei die Plätze ab dem Jahr 2015 vollständig durch eine Fachfirma spielbereit gemacht werden.</p>
        

        


        </Col>
        <Col md="12" lg="6">
          <Galery data={generalGalery}/>
        </Col>



        </Row>
        <Row>
          <Col md="12" lg="6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.6340800385597!2d8.396305965917366!3d50.559574537376655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc45eea5e3ac5f%3A0x37eff8c2874dfbc3!2sTennisverein%2077%20Niederbiel!5e0!3m2!1sen!2sus!4v1569541915015!5m2!1sen!2sus" width="100%" height="400" frameborder="1" style={{border:0}} allowfullscreen=""></iframe>            <br></br>

          </Col>
          <Col md="12" lg="6">
          <p>   <span className="bigger">Das Vereinsheim</span> ist ausgestattet mit einem großem, hellen Gastraum (renoviert im Frühjahr 2008) und geräumigen Umkleideräumen für Damen und Herren mitsamt sanitären Anlagen.
          Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Vereinsheims im Grünen mit Blick auf die Plätze.
      </p>
      <p>
        Das Vereinsheim ist Montags, Dienstags, Freitags, Samstags und Sonntags ab 18 Uhr bewirtet.
      </p>

          </Col>
        </Row>

      </div>
      <div style={{padding: 10}}>
      <p style={{fontWeight: "bold"}}>Ein Besuch bei uns lohnt sich jederzeit und wenn Sie gerne mehr über uns wissen möchten, nehmen Sie einfach Kontakt mit uns auf!
      
      </p>

</div>

      <style jsx>
        {`
       
        .left-text {
          text-align: left;
        }`}
      </style>
    </Layout>
  );
}