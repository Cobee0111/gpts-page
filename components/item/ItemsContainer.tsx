import { FC } from "react";
import ItemBox from "./ItemBox";

interface Item {
  IMAGE_PATH: string;
  TITLE: string;
  CONTENT: string;
}

interface ItemsContainerProps {
  items: Item[];
}

const ItemsContainer: FC<ItemsContainerProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <ItemBox
            imagePath={item.IMAGE_PATH}
            title={item.TITLE}
            content={item.CONTENT}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
