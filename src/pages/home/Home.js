import { useState, useEffect, useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Category from "components/category/Category";
import FilmsController from "./Home.ctrl";
import './Home.scss';

function HomePage() {
  const { filmsStore } = useContext(MobXProviderContext);
  const [controller] = useState(new FilmsController({ films: filmsStore }));

  return (
    <div className="category-wrapper">
      {[...controller.getCategories()].map((category) => (
        <Category key={category} categoryName={category} items={controller.getFilmsByCategory(category)} />
      ))}
    </div>
  );
}

export default observer(HomePage);
