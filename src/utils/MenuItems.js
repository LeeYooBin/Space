import Home from "../assets/icons/home-ativo.png";
import Liked from "../assets/icons/mais-curtidas-inativo.png";
import Viewed from "../assets/icons/mais-vistas-inativo.png";
import News from "../assets/icons/novas-inativo.png";
import Surprise from "../assets/icons/surpreenda-me-inativo.png";

const MenuItems = {
  Home: {
    src: Home,
    alt: "Home",
    text: "Home",
    href: "/",
  },
  Liked: {
    src: Liked,
    alt: "Like",
    text: "Most liked",
    href: "/",
  },
  Viewed: {
    src: Viewed,
    alt: "View",
    text: "Most seen",
    href: "/",
  },
  News: {
    src: News,
    alt: "News",
    text: "News",
    href: "/",
  },
  Surprise: {
    src: Surprise,
    alt: "Lamp",
    text: "Surprise me",
    href: "/",
  },
};

export default MenuItems;
