import axios from "axios";

//randomなわんわんを取得
// const urlAPI = "https://dog.ceo/api/breeds/image/random"
// axios.get(urlAPI ).then((res )=>{
//   console.log(res)
// })

//https://dog.ceo/api/breed/shihtzu/list


//犬種を指定
console.log("犬種を指定")
const urlAPI = "https://dog.ceo/api/breed/shihtzu/images/random"
axios.get(urlAPI ).then((res )=>{
  console.log(res)
})