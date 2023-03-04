import { CardProps } from "shared/ui/Card";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

export const projectsArray: CardProps[] = [
  {
    category: CategoriesConstants.Other,
    link: "https://github.com/Alium-Finance",
    text: "Contibute DEFI project.",
    title: "DEFI project",
    id: "DEFI",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/BunsDev/dashboard",
    text: "Fullstack dashboard app with dragndrop. [Next,React]",
    title: "Dashboard",
    id: "Dashboard",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/BunsDev/delivery-api",
    text: "Nest js api for delivery app. (Nest, 2FA, graphql, realtime, redis, postgres, elastic search, Aws s3)",
    title: "Delivery-api",
    id: "delivery-api",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/BunsDev/nft-marketplace-backend",
    text: "Prepare metadata for ERC1155 and deploy (with preview on opensea)",
    title: "Nft-marketplace-backend",
    id: "nft-marketplace-backend",
  },
  {
    category: CategoriesConstants.Blockchain,
    link: "https://github.com/BunsDev/nft-marketplace-solidity",
    text: "ERC1155 smart contract",
    title: "Nft-marketplace-solidity",
    id: "nft-marketplace-solidity",
  },
  {
    category: CategoriesConstants.Blockchain,
    link: "https://github.com/BunsDev/dvideo",
    text: "Upload video on ipfs and smart contract for dvideo",
    title: "Dvideo",
    id: "dvideo",
  },
  {
    category: CategoriesConstants.Mobile,
    link: "https://github.com/BunsDev/rate-interview",
    text: "Mobile application for evaluating companies and vacancies. [react-native]",
    title: "Rate-interview",
    id: "rate-interview",
  },
];
