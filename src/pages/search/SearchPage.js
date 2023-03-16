import { useContext, useEffect } from "react";
import { MobXProviderContext, observer } from "mobx-react";
import { useParams } from "react-router-dom";
import Category from "components/category/Category";

function SearchPage() {
    const { filmsStore } = useContext(MobXProviderContext);
    let { query } = useParams();

    useEffect(() => {
        filmsStore.searchFilms(query);
    }, [query]);

    return (
        <div className="category-wrapper">
            <h2>Search Results for: {query}</h2>

            Items found: {filmsStore.moviesData.searchResults.length}

            <Category categoryName={"Found movies"} items={filmsStore.moviesData.searchResults} />

        </div>
    );
}

export default observer(SearchPage);

