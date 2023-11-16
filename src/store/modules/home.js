import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services'
import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'

// 创建异步请求
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
  // 一个异步请求里面 发送了多个网络请求；每个拿到结果后单独处理属于自己的数据.
  getHomeGoodPriceData().then(res =>{
    console.log("执行了getHomeGoodPriceData,获取到","准备修改reducers的state.goodPriceInfo")
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res =>{
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
  

})

const homeSlice = createSlice({
  // 初始化state？
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    plusInfo: {}
  },
  
  reducers: {
    // 经过这个步骤可以确保每次修改都会在对应的reduxdvtool工具中看到修改过程。
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
      console.log("修改了state.goodPriceInfo", state.goodPriceInfo)
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    },
    

 
  },
  
  // 这是reducer
  extraReducers: {
  }

})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changePlusInfoAction

} = homeSlice.actions

export default homeSlice.reducer
