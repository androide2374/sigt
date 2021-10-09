import { Form } from 'react-bootstrap'

export default function Select({ setData, datas = [], label, value }) {
  console.log({ setData, datas, label })
  return (
    <Form.Select
      value={value}
      required
      onChange={({ target }) =>
        target.value !== '' ? setData(target.value) : ''
      }
      aria-label={label}
    >
      <option value="">Seleccione un {label}</option>
      {datas.map((data) => (
        <option key={data.id} value={data.id}>
          {data.descripcion}
        </option>
      ))}
    </Form.Select>
  )
}
