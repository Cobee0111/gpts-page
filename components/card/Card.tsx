import { FC, ReactNode } from 'react';
import styles from './Card.module.css'
import { useRouter } from 'next/router';

interface CardProps {
  link: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ link, children }) => {
  const router = useRouter();

  const linkHandler = () => {
    router.push(link);
  }

  return (
    <div className={styles.cardContainer} onClick={linkHandler}>
      {children}
    </div>
  );
};

export default Card;