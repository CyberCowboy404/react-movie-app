import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Category from "components/category/Category";

function SearchPage() {
    const { filmsStore } = useContext(MobXProviderContext);

    return (
        <div className="category-wrapper">
            <h2>Search Results</h2>

        </div>
    );
}

export default observer(SearchPage);

