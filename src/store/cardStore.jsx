import { create } from "zustand";
import ImageOne from "../assets/images/Img.svg"
import ImageTwo from "../assets/images/Img (1).svg"
import ImageThree from "../assets/images/Img (2).svg"
import ImageFour from "../assets/images/Img (3).svg"

export const useCardStore = create((set) => ({
  cardImages: [
    {
        id: 0, image: ImageOne, title: "Graphic Design", description: "Aura Branding Design"
    },
    {
        id: 1, image: ImageTwo, title: "Graphic Design", description: "AB.S Snack Packaging"
    },
    {
        id: 2, image: ImageThree, title: "Web Development", description: "Gradient Website Development"
    },
    {
        id: 3, image: ImageFour, title: "Content Writing", description: "Magazine Content Writing"
    },
  ],
}));
