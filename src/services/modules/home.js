import anRequest from "..";
// 这里是请求接口

export function getHomeGoodPriceData() {
  return anRequest.get({
    url:"./home/goodprice"
    // 这里把url拼接好了，然后返回一个promise，promise再返回给getHomeGoodPriceData
  })
}

export function getHomeHighScoreData() {
  return anRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return anRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return anRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return anRequest.get({
    url:"/home/longfor"
  })
}

export function getHomePlusData() {
  return anRequest.get({
    url: "/home/plus"
  })
}