import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Category from "components/category/Category";
import './Home.scss';

function HomePage() {
  const { filmsStore } = useContext(MobXProviderContext);

  return (
    <div className="category-wrapper">
      {filmsStore.getCategories().map((category) => (
        <Category key={category} categoryName={category} items={filmsStore.getFilmsByCategory(category)} />
      ))}
    </div>
  );
}

export default observer(HomePage);
