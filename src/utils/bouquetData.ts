export interface BouquetItem {
  id: number;
  image: string;
  heading: string;
  price: string;
}

 export const bouquetData: BouquetItem[] = [
   {
     id: 1,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745055579/image1_xy0qvu.jpg",
     heading: "Floral Enchantment",
     price: "₹300",
   },
   {
     id: 2,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745055744/image2_fibszg.jpg",
     heading: "Elegant Bouquet",
     price: "₹300",
   },
   {
     id: 3,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/t_image3/v1745055824/image3_mm0oev.jpg",
     heading: "Bloom Picks",
     price: "₹300",
   },
   {
     id: 4,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745056258/image4_qnfazn.jpg",
     heading: "Bloom Beauty",
     price: "₹400",
   },
   {
     id: 5,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745056334/image5_huzbpu.jpg",
     heading: "Sunshine Bouquet",
     price: "₹400",
   },
   {
     id: 6,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745056480/image7_rxmehk.jpg",
     heading: "Lovely Bouquet",
     price: "₹300",
   },
   {
     id: 7,
     image:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745056595/image8_lmivvg.jpg",
     heading: "Flower Picks",
     price: "₹400",
   },
 ];

export default bouquetData;
