import Card from "react-bootstrap/Card";
export default function ShopCard() {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-vector/pencil_24908-54630.jpg?size=626&ext=jpg&ga=GA1.1.1530590116.1685281923&semt=sph"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
