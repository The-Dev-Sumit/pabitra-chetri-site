// src/utils/mehndiData.js
export interface MahendiItem {
  id: number;
  image: string;
  heading: string;
  price: string;
}

const mahendiData: MahendiItem[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745057500/mahendi1_pb0xsl.jpg",
    heading: "Bridal Mahendi",
    price: "₹500",
  },
  {
    id: 2,
    image: "https://blog.shaadivyah.com/wp-content/uploads/2024/06/216.png",
    heading: "Arabic Mahendi",
    price: "₹500",
  },
  {
    id: 3,
    image:
      "https://newsmeter.in/h-upload/2021/11/25/309199-simple-round-palm-mehndi-design-for-left-hand.webp",
    heading: "Simple Mahendi",
    price: "₹500",
  },
  {
    id: 4,
    image:
      "https://artisticmehendi.com/wp-content/uploads/2024/01/simple-mehendi-design-front-hand-12.jpg",
    heading: "Simple Mahendi",
    price: "₹500",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ7o7dFEVzn-nii9ItZv-Wc4OgGEhP_jjjg&s",
    heading: "Simple Mahendi",
    price: "₹500",
  },
];

export default  mahendiData ;