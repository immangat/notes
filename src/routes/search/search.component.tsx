import {useParams} from "react-router-dom";
import SearchDirectory from "../../components/search-directory/search-directory.component";

type CategoryRouteParam = {
    cat: string
}


const Search = () => {
    const {cat} = useParams<keyof CategoryRouteParam>() as CategoryRouteParam
    var catSpliced = ''
    var labelSearch = false
    if (cat.substring(0, 4) === 'text') {
        catSpliced = cat.substring(4)
    } else {
        catSpliced = cat.substring(5)
        labelSearch = true
    }


    return (
        <div>
            {
                catSpliced
                    ?
                    <SearchDirectory
                        stringToSearch={catSpliced}
                        labelSearch={labelSearch}
                    />
                    :

                    <h1>Enter a word to search {catSpliced}</h1>

            }
        </div>
    )
}

export default Search