import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3002'
})

export const getDataToday = async () => {
  const res = await api.get('/today')
  return res.data
}

export const getDataByWeek = async () => {
  const res = await api.get('/week')
  return res.data
}
export const getDataByThisMonth = async () => {
  const res = await api.get('/this_month')
  return res.data
}

export const getDataBySixMont = async () => {
  const res = await api.get('/six_months')
  return res.data
}
export const getDataByYTD = async () => {
  const res = await api.get('/year_to_date')
  return res.data
}
export const getDataByOneYear = async () => {
  const res = await api.get('/one_year')
  return res.data
}
export const getDataMax = async () => {
  const res = await api.get('/max')
  return res.data
}
export const getDataPersonalized = async () => {
  const res = await api.get('/personalized')
  return res.data
}