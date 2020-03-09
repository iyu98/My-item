import axios from 'utils/axios'
/* *************** 获取热映电影 **********************/
let getMovieReying = () => {
  let url = 'http://rap2.taobao.org:38080/app/mock/246527/www.minutesi.top/reying'
  return axios.get(url)
}
/* *************** 即将上映 **********************/
// let getMovieComing = () => {
//   let url = 'http://rap2.taobao.org:38080/app/mock/246527/www.minutesi.top/coming'
//   return axios.post(url)
// }
/* *************** 单个详情 **********************/
let getMovieDetail = (filmid) => {
  let url = `https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/film/getDetail?filmId=${filmid}`
  return axios.get(url)
}
/* *************** 即将上映 **********************/
let getMovieComing = () => {
  let url = 'http://rap2.taobao.org:38080/app/mock/246527/www.minutesi.top/coming'
  return axios.get(url)
}
/* *************** 获取资讯 **********************/
let getInformation = () => {
  let url = 'http://rap2.taobao.org:38080/app/mock/246527/www.minutesi.top'
  return axios.get(url)
}

export {
  getMovieReying,
  getMovieComing,
  getMovieDetail,
  getInformation
}