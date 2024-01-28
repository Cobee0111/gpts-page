import { FC, ReactNode } from 'react';
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  );
};

export default Card;