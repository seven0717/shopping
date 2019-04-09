import { get } from '../get'

export function getAdData() {
   const result = get('/homead');
   return result
}

// export function getListata(city,page) {
//    const res = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
//    return res
// }