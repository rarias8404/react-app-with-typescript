import axios from 'axios'
import { SubsResponse } from '../types'

export const getAllSubs = async (): Promise<SubsResponse> => {
  const { data } = await axios.get('http://localhost:3000/subs')
  return data
}
