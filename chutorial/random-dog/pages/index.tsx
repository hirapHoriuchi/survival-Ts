import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

type Props = {
  initialImageUrl: string;
}

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);

  const handleClick = async() => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage['message']);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>いっっっぬを見る</button>
      <div>{loading || <img src={imageUrl} />}</div>
    </div>
  );

};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  const image = await fetchImage();
  return  {
    props: {
      initialImageUrl: image['message'],
    },
  };
};

type Image = {
  url: string;
};

const fetchImage = async(): Promise<Image> =>{
  const res = await fetch("https://dog.ceo/api/breed/shihtzu/images/random");
  const images = await res.json();
  console.log(images)
  return images
}