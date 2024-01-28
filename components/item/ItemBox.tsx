import { FC } from "react";
import Card from "../card/Card";
import ItemImage from "./ItemImage";
import styles from './ItemBox.module.css'

interface ItemBoxProps {
  imagePath: string;
  title: string;
  content: string;
  link: string
}

const ItemBox: FC<ItemBoxProps> = ({ imagePath, title, content, link }) => {
  return (
    <Card link={link}>
      <div className={styles.itemContainer}>
        <div className={styles.imageBox}>
          <ItemImage imagePath={imagePath} />
        </div>
        <div className={styles.infoBox}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Card>
  );
};

export default ItemBox;
