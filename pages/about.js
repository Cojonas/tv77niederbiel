import Layout from "../components/Layout";
import Galery from "../components/Carousel"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Row, Col } from "react-bootstrap";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={13}
  defaultCenter={{ lat: 50.5615634, lng: 8.3983103 }}
>
  {props.isMarkerShown && <Marker position={{ lat: 50.5615634, lng: 8.3983103 }} />}
</GoogleMap>
))




export default function About() {
  return (
    <Layout>
      <h1>Über uns</h1>
      <div className="left-text">
        
      <Row>
        <Col md="12" lg="6">
        <h2>Die Anlage</h2>
        <p>Unsere Anlage liegt ruhig am Ortsrand von Niederbiel und bietet dem Aktiven vier stets gut bespielbare Sandplätze.
        <p>Zunächst legte man auf dem vereinseigenen Gelände etwas abseits der Wohngebiete zwei Sandplätze an (Fertigstellung im Juli 1978), bevor man im August 1980 das Clubhaus einweihen konnte. Im Frühjahr 1981 wurde die Anlage schließlich durch den Bau zweier weiterer Plätze vervollständigt. Seither sorgen die Vereinsmitglieder größtenteils selbst für die Pflege der Anlage, wobei die Plätze ab dem Jahr 2015 vollständig durch eine Fachfirma spielbereit gemacht werden.</p>
        </p>

        <h2>Das Clubheim</h2>
        <p>        Prunkstück der Anlage ist das vereinseigene Clubhaus mit großem, hellen Gastraum (renoviert im Frühjahr 2008) und geräumigen Umkleideräumen für Damen und Herren mitsamt sanitären Anlagen.
Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Grünen mit Blick auf die Plätze.
</p>


        </Col>
        <Col md="12" lg="6">
        <Galery />

        </Col>



      </Row>

      </div>


      <h2>Anfahrt</h2>
      <p>Der Ort Niederbiel gehört zur Stadt Solms und liegt wunderschön ruhig im Lahntal in der Nähe der Bundesstraße 49 zwischen Giessen im Osten und Limburg im Westen.
      </p>
 
          <MyMapComponent 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            isMarkerShown 
            />
            <br></br>
      <p>Ein Besuch bei uns lohnt sich jederzeit und wenn Sie gerne mehr über uns wissen möchten, nehmen Sie einfach Kontakt mit uns auf!
      
      </p>
      <style jsx>
        {`
        .left-text {
          text-align: left;
        }`}
      </style>
    </Layout>
  );
}