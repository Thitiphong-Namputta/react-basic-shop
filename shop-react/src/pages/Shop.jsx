import ShopCard from "../components/shop/ShopCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Shop() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
