import Image from 'next/image'
import NavBar from '../components/navbar'

export default function Default({ children }) {
  return (
    <>
        <NavBar />
      {children}
    </>
  )
}
