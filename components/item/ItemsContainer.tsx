import { FC } from "react";
import ItemBox from "./ItemBox";
import styles from "./ItemsContainer.module.css";

interface Item {
  IMAGE_PATH: string;
  TITLE: string;
  CONTENT: string;
  LINK: string;
}

interface ItemsContainerProps {
  items: Item[];
}

const ItemsContainer: FC<ItemsContainerProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <ItemBox
            imagePath={item.IMAGE_PATH}
            title={item.TITLE}
            content={item.CONTENT}
            link={item.LINK}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
