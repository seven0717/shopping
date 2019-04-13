import { get } from '../get'

export function searchdata(page, cityName, category, keyword) {
   const keywordStr = keyword ? '/' + keyword : '';
   const result = get('/search/' + page + '/' + cityName + '/' + category + keywordStr);
   return result;
}