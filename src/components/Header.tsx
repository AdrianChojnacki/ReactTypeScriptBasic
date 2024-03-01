import { type FC, type PropsWithChildren } from "react";

interface ImageInterface {
  image: { src: string; alt: string };
}

type HeaderProps = PropsWithChildren<ImageInterface>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
