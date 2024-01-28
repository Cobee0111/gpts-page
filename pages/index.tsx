import GPTS_ITEMS from "@/constants/items";
import ItemsContainer from "@/components/item/ItemsContainer";

const indexPage = () => {
  return (
    <main>
      <ItemsContainer items={GPTS_ITEMS}/>
    </main>
  );
};

export default indexPage;
