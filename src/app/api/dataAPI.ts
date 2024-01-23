import { InputType } from "@/interfaces/input.type";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3002'
})

export const getData = async (props: InputType) => {
  const res = await api.get(`/${props}`)
  return res.data
}