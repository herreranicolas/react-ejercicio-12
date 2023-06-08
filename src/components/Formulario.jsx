import { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

function Formulario() {
  const [categoria, setCategoria] = useState("");
  const [arrayNoticias, setArrayNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_239716e78b97b290380b8251513e029f94c32&category=${
          categoria || "sports"
        }&language=es`
      );
      const noticias = await respuesta.json();
      setArrayNoticias(noticias.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="p-3 border border-2 border-dark border-bottom-0">
        <Form.Group
          as={Row}
          className="justify-content-center align-items-center"
        >
          <Form.Label
            column
            sm={2}
            md={3}
            htmlFor="categoria"
            className="p-0 text-center text-lg-end mb-2 mb-md-0"
          >
            Buscar por categoría:
          </Form.Label>
          <Col sm={10} md={4}>
            <Form.Select
              name={categoria}
              id="categoria"
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
              value={categoria}
            >
              <option value="">Seleccionar categoria</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="environment">Medio Ambiente</option>
              <option value="food">Comida</option>
              <option value="health">Salud</option>
              <option value="politics">Política</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnología</option>
              <option value="top">Top noticias</option>
              <option value="tourism">Turismo</option>
              <option value="world">Mundo</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={arrayNoticias} />
    </>
  );
}

export default Formulario;
