// import { onActivated, onDeactivated, onBeforeUnmount, ref, onMounted, unref } from 'vue'
// const isFunction = (value) => typeof value === 'function'
// import * as echarts from 'echarts'
//
// export {
//   echarts
// }
// export const colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
// export function setFontSize(fontSize) {
//   const docWidth = document.documentElement.clientWidth
//   return ((fontSize * docWidth) / 1920) | 0
// }
//
// export function emptyOption() {
//   return {
//     dataset: {
//       source: []
//     },
//     graphic: {
//       elements: [
//         {
//           type: 'text',
//           left: 'center',
//           top: 'center',
//           style: {
//             text: '暂无数据',
//             fill: '#999',
//             fontSize: setFontSize(18)
//           }
//         }
//       ]
//     }
//   }
// }
// export const useEcharts = (chartDomRef) => {
//   const myChart = ref()
//   let options = {}
//   const echartsResize = () => {
//     if (isFunction(options)) {
//       unref(myChart) && unref(myChart).setOption(options())
//     }
//     unref(myChart) && unref(myChart).resize()
//   }
//
//   window.addEventListener('resize', echartsResize)
//
//   onActivated(() => {
//     window.addEventListener('resize', echartsResize)
//   })
//
//   onDeactivated(() => {
//     window.removeEventListener('resize', echartsResize)
//   })
//
//   onBeforeUnmount(() => {
//     window.removeEventListener('resize', echartsResize)
//     unref(myChart) && unref(myChart).dispose()
//   })
//
//   onMounted(() => {
//     initChart()
//   })
//
//   function dispose() {
//     if (unref(myChart)) {
//       myChart.value.dispose()
//       myChart.value = null
//     }
//   }
//
//   function initChart() {
//     if (!unref(myChart) && unref(chartDomRef)) {
//       myChart.value = echarts.init(unref(chartDomRef))
//     }
//   }
//
//   function setOption(opt) {
//     options = opt
//     if (options) {
//       const o = isFunction(options) ? options() : options
//       unref(myChart) && unref(myChart).setOption(o)
//     }
//   }
//
//   return {
//     initChart,
//     myChart,
//     setOption,
//     echartsResize,
//     dispose
//   }
// }
