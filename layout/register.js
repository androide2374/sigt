import { Card, Container } from 'react-bootstrap'
import NavBar from '../components/navbar'
import style from './register.module.css'

export default function Register({ children }) {
  return (
    <>
      <NavBar basic={true} />
      <Container className={style.container}>
        <Card className={style.card}>
          {children}
        </Card>
      </Container>
    </>
  )
}
