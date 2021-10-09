import { Card } from 'react-bootstrap'
import Head from 'next/head'
import Register from '../../layout/register'
import styles from './register.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import FormRegister from '../../components/register/formregister'

export default function Index() {
  return (
    <Register>
      <Head>
        <title>Registro</title>
        <meta name="description" content="Formulario de registro" />
        <link rel="icon" href="/navbaricon/logo-lomas.svg" />
      </Head>
      <Card.Body className={`${styles.card}`}>
        <FormRegister />
      </Card.Body>
    </Register>
  )
}
