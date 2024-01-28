import { FC } from "react";
import Card from "../card/Card";

interface ItemBoxProps {
  imagePath: string;
  title: string;
  content: string;
}

const ItemBox: FC<ItemBoxProps> = ({ imagePath, title, content }) => {
  return (
    <Card>
      <div>{imagePath}</div>
      <div>{title}</div>
      <div>{content}</div>
    </Card>
  );
};

export default ItemBox;
