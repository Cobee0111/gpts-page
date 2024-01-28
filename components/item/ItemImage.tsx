import { FC } from "react";
import Image from "next/image";
import styles from './ItemImage.module.css'

interface ItemImageProps {
  imagePath: string
}

const ItemImage: FC<ItemImageProps> = ({ imagePath }) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={imagePath} alt="이미지" width={50} height={50}/>
    </div>
  );
};

export default ItemImage;