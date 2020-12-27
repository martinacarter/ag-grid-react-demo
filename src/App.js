import React from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ClientSideGrid from "./ClientSideGrid";
import ServerSideGrid from "./ServerSideGrid";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 style={{ textAlign: "center" }}>Client Side Grid</h2>
            <ClientSideGrid />
          </div>
        </Col>
        <Col>
          <div>
            <h2 style={{ textAlign: "center" }}>Server Side Grid</h2>
            <ServerSideGrid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
