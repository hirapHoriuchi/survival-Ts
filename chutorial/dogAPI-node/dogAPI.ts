import axios from "axios";

//randomなわんわんを取得
// const urlAPI = "https://dog.ceo/api/breeds/image/random"
// axios.get(urlAPI ).then((res )=>{
//   console.log(res)
// })



//犬種を指定
console.log("犬種を指定")
const urlAPI = "https://dog.ceo/api/breed/hound/Shihtzu/images/random"
axios.get(urlAPI ).then((res )=>{
  console.log(res)
})