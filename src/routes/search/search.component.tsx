import {useParams} from "react-router-dom";
import SearchDirectory from "../../components/search-directory/search-directory.component";

type CategoryRouteParam = {
    cat: string
}


const Search = () => {
    const {cat} = useParams<keyof CategoryRouteParam>() as CategoryRouteParam
    const catSpliced = cat.substring(4)

    return (
        <div>
            {
                catSpliced
                    ?
            <SearchDirectory
                stringToSearch={catSpliced}
            />
                    :

                    <h1>Enter a word to search {catSpliced}</h1>

            }
        </div>
    )
}

export default Search