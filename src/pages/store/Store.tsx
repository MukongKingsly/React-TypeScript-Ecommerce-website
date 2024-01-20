import { Row, Col, Container } from "react-bootstrap";
import storeItems from "../../data/items.json";
import { StoreItem } from "../../components/StoreItem";

function Store() {
  return (
    <Container>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item: any) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Store;
