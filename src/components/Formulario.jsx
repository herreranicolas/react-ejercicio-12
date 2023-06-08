import { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

function Formulario() {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [arrayNoticias, setArrayNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, [categoria, pais]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_239716e78b97b290380b8251513e029f94c32&category=${
          categoria || "sports"
        }&language=es,en,fr,de,pt&country=${pais || "ar"}`
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
          className="justify-content-center align-items-center mb-3"
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
            Buscar por país:
          </Form.Label>
          <Col sm={10} md={4}>
            <Form.Select
              name={pais}
              id="pais"
              onChange={(e) => {
                setPais(e.target.value);
              }}
              value={pais}
            >
              <option value="">Seleccionar país</option>
              <option value="de">Alemania</option>
              <option value="ar">Argentina</option>
              <option value="au">Australia</option>
              <option value="bo">Bolivia</option>
              <option value="br">Brasil</option>
              <option value="cl">Chile</option>
              <option value="co">Colombia</option>
              <option value="ec">Ecuador</option>
              <option value="es">España</option>
              <option value="us">Estados Unidos</option>
              <option value="fr">Francia</option>
              <option value="it">Italia</option>
              <option value="mx">Mexico</option>
              <option value="py">Paraguay</option>
              <option value="pe">Peru</option>
              <option value="pt">Portugal</option>
              <option value="uy">Uruguay</option>
              <option value="ve">Venezuela</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={arrayNoticias} />
    </>
  );
}

export default Formulario;
