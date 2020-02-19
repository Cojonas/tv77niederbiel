import Layout from "../components/Layout";
import TeamItems from "../teamItems"
import TeamCard from "../components/TeamCard"
import {Row, Col } from "react-bootstrap"
export default function Teams() {
    return (
      <Layout title="Unsere Teams" pictures={[{picture: "/static/teamfoto_herren.jpeg"}, {picture: "/static/teamfoto_damen.jpeg"}]}>

        <h2 style={{paddingLeft: 15}}>Saison 2020</h2>

        <div className="left-text">
            <Row noGutters>
            {
              TeamItems.teams.map((item) => <Col key={item.name.trim()} cols="12" md="6"><TeamCard data={item}></TeamCard></Col>)
          }


            </Row>


        </div>

          <style jsx>
              {`
              .root {
                text-align: -webkit-left !important;
                  text-align: left !important;
              }
              .left-text {
                text-align: left;

              }
              `}
          </style>

          
      </Layout>
    );
  }