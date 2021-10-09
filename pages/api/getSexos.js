import axios from 'axios'
export const getSexo = async () => {
  const { data } = await axios.get(`${process.env.API_URI}/Filters/Sexo`)
  return data
}
