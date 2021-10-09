import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useState, useEffect } from 'react'
import { getSexo } from '../../pages/api/getSexos'
import Select from '../select'
export default function FormRegister() {
  const [validated, setValidated] = useState(false)

  const [sexos, setSexos] = useState([{ id: 0, descripcion: '' }])
  useEffect(() => {
    async function setSexo() {
      setSexos(await getSexo())
    }
    setSexo()
  }, [])

  const [validationPasswordmessage, setValidationPasswordmessage] = useState('')

  const [register, setRegister] = useState({
    username: '',
    email: '',
    documento: '',
    password: '',
    idSexo: 0,
    idTipoDocumento: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    telefono: '',
    movil: '',
    calle: '',
    altura: 0,
    piso: '',
    depto: '',
    cp: '',
    fechaAlta: new Date(),
    habilitado: true
  })

  const validationPassword = (password) => {
    password !== register.password
      ? setValidationPasswordmessage('la contraseña no coinide')
      : setValidationPasswordmessage('')
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  const cargoSexo = (sexo) =>{
    debugger
    setRegister({ ...register, idSexo: sexo })
  }

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      id="register_form"
    >
      <h2>Datos de usuario</h2>
      <Row>
        <Col sm="12" md="6" lg="3">
          <Form.Group className="mb-3" controlId="formBasicUsuario">
            <Form.Label>Usuario</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="Usuario"
                placeholder="Usuario"
                value={register.username}
                onChange={({ target }) =>
                  setRegister({ ...register, username: target.value })
                }
                required
              />
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
              onChange={({ target }) =>
                setRegister({ ...register, email: target.value })
              }
              value={register.email}
            />
          </Form.Group>
        </Col>

        <Col sm="12" md="6" lg="3">
          <Form.Group className="mb-3" controlId="formBasicConstraseña">
            <Form.Label>Constraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="*********"
              required
              onChange={({ target }) =>
                setRegister({ ...register, password: target.value })
              }
              value={register.password}
            />
          </Form.Group>
        </Col>

        <Col sm="12" md="6" lg="3">
          <Form.Group className="mb-3" controlId="formBasicConstraseñaConfirm">
            <Form.Label>Confirmar Constraseña</Form.Label>
            <Form.Control
              type="password"
              name="confirm_password"
              placeholder="*********"
              required
              onChange={({ target }) => validationPassword(target.value)}
            />
          </Form.Group>
          {validationPasswordmessage}
        </Col>
      </Row>
      <h2>Datos personales</h2>
      <Row>
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
          <Form.Group className="mb-3" controlId="formBasicFecha">
            <Form.Label>Fecha Nacimiento</Form.Label>
            <DatePicker
              className="form-control"
              placeholderText="dd/mm/yyyy"
              required
            />
          </Form.Group>
        </Col>

        <Col sm="12" md="6" lg="3">
          <Form.Group controlId="formBasicSexo">
            <Form.Label>Sexo</Form.Label>
            <Select setData={cargoSexo} datas={sexos} label={'sexo'} value={register.idSexo} />
            <Form.Select
            value={register.idSexo}
              required
              onChange={({ target }) =>
                target.value !== ''
                  ? setRegister({ ...register, idSexo: target.value })
                  : ''
              }
              aria-label="Sexo"
            >
              <option value="">Seleccione un sexo</option>
              {sexos.map((sexo) => (
                <option key={sexo.id} value={sexo.id}>
                  {sexo.descripcion}
                </option>
              ))}
            </Form.Select>
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
  )
}
