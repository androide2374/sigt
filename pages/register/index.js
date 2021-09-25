import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Head from 'next/head'
import Register from '../../layout/register'
import styles from './register.module.css'
import 'react-datepicker/dist/react-datepicker.css'

export default function index() {
  return (
    <Register>
      <Head>
        <title>Registro</title>
        <meta name="description" content="Formulario de registro" />
        <link rel="icon" href="/navbaricon/logo-lomas.svg" />
      </Head>
      <Card.Body className={`${styles.card}`}>
        <Form>
          <h2>Datos de usuario</h2>
          <Row>
            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicUsuario">
                <Form.Label>Usuario</Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control type="Usuario" placeholder="Usuario" required />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@mail.com"
                  required
                />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicConstraseña">
                <Form.Label>Constraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*********"
                  required
                />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group
                className="mb-3"
                controlId="formBasicConstraseñaConfirm"
              >
                <Form.Label>Confirmar Constraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*********"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <h2>Datos personales</h2>
          <Row>
            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" required />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group controlId="formBasicApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" required />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicDocumento">
                <Form.Label>Documento</Form.Label>
                <Form.Control type="number" placeholder="0000000000" required />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicCuil">
                <Form.Label>CUIL</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="00-0000000000-0"
                  required
                />
              </Form.Group>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Form.Group className="mb-3" controlId="formBasicFecha">
                <Form.Label>Fecha Nacimiento</Form.Label>
                <DatePicker className="form-control" placeholderText="dd/mm/yyyy" required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto Terminos" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Register>
  )
}
