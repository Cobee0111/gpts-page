import GPTS_ITEMS from "@/constants/items";
import ItemsContainer from "@/components/item/ItemsContainer";
import styles from './styles/index.module.css'

const indexPage = () => {
  return (
    <main className={styles.mainContainer}>
      <ItemsContainer items={GPTS_ITEMS}/>
    </main>
  );
};

export default indexPage;
