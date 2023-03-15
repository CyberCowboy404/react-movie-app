import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Category from "components/category/Category";
import './Home.scss';

function HomePage() {
  const { filmsStore } = useContext(MobXProviderContext);

  const getCategories = () => {
    return filmsStore.getCategories();
  }

  const getFilmsByCategory = (category) => {
    return filmsStore.getFilmsByCategory(category);
  }

  return (
    <div className="category-wrapper">
      {getCategories().map((category) => (
        <Category key={category} categoryName={category} items={getFilmsByCategory(category)} />
      ))}
    </div>
  );
}

export default observer(HomePage);
