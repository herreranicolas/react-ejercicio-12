import { Card, Col } from "react-bootstrap";

function Noticia({ imagen, titulo, descripcion, link }) {
  return (
    <Card as={Col} style={{ width: "18rem" }} className="me-md-3 mb-3">
      <Card.Img variant="top" src={imagen || `https://picsum.photos/200/120`} />
      <Card.Title>{titulo}</Card.Title>
      <Card.Text className="text-truncate">{descripcion}</Card.Text>
      <a className="btn btn-primary mt-auto mb-3" href={link} target="_blank">
        Ver noticia completa
      </a>
    </Card>
  );
}

export default Noticia;
