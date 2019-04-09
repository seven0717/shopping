import { get } from '../get'

export function getAdData() {
   const res = get('/api/homead')
   return res
}

// export function getListata(city,page) {
//    const res = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
//    return res
// }