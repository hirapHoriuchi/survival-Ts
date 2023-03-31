import fetch from "node-fetch"


type Image = {
  url: string;
};

const getDogImage = async() :Promise<Image> => {
  const res = await fetch("https://dog.ceo/api/breed/Shihtzu/images/random");
  const images = await res.json();
  console.log(images)
  return images[0]
}


getDogImage()