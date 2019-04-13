import { get } from '../get'

export function getInfoData(id) {
   const result = get('/detail/info/' + id);
   return result;
}

export function getCommentData(page,id) {
   const result = get('/detail/comment/'+ page +'/' + id);
   return result;
}