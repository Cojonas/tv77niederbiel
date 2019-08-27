import Layout from "../components/Layout";
import TeamItems from "../teamItems"
import TeamCard from "../components/TeamCard"
import {Row, Col } from "react-bootstrap"
export default function Teams() {
    return (
      <Layout>
        <h1>Teams</h1>

        <div className="left-text">
            <Row noGutters>
            {
              TeamItems.teams.map((item) => <Col cols="12" md="6" xl="4"><TeamCard data={item}></TeamCard></Col>)
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