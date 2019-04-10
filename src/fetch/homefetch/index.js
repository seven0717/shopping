import { get } from '../get'

export function getAdData() {
   const result = get('/homead');
   return result
}


export function getListata(city,page) {
   const res = get('/homelist/' + encodeURIComponent(city) + '/' + page)
   // const res = get(`/homelist/${city}/${page}`)
   return res
}