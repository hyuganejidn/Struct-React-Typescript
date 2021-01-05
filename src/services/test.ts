import axios from '@/axios'

export const testApi = () => axios.get('stories').then((res) => res.data.data)
