import {InputHTMLAttributes, useContext, useEffect, useRef, useState} from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import {useNavigate} from "react-router-dom";
import {NavBarContext} from "../../contexts/nav-bar.context";
import {SearchBoxButtons, SearchBoxContainer, SearchBoxX} from "./search-box.styles";

type SearchBoxTypes = {} & InputHTMLAttributes<HTMLInputElement>
const SearchBox = (props: SearchBoxTypes) => {

    const {reset} = useContext(NavBarContext)
    const navigate = useNavigate()
    const [searchUrl, setSearchUrl] = useState('')
    const [showX, setShowX] = useState(false)
    const [backgroundColor, switchBackGroundColor] = useState(true)


    useEffect(() => {
         navigate(`/search/text${searchUrl}`);
    }, [searchUrl])

    useEffect(() => {
       // if(!isInitialRender.current){
        setSearchUrl('')
        setShowX(false)
        switchBackGroundColor(true)
       // }
    }, [reset])

    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <SearchBoxContainer
            backgroundColor={backgroundColor}
        >
            <SearchBoxButtons
                onClick={() => {
                    navigate(`/search/text${searchUrl}`)
                    switchBackGroundColor(false)
                    setShowX(true)
                }}
                backgroundColor={backgroundColor}
            >
                <AiOutlineSearch size={30}/>
            </SearchBoxButtons>
            <div
                style={{
                    display: "flex",
                    flexGrow: "1",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <input
                    style={{
                        border: "none",
                        backgroundColor: "inherit",
                        outline: "none",
                        width: "0",
                        minWidth: "100%"
                    }}
                    value={searchUrl}
                    placeholder='search'
                    type='input'
                    onClick={() => {
                        navigate(`/search/text${searchUrl}`)
                        switchBackGroundColor(false)
                        setShowX(true)
                    }}
                    onChange={(e) => {
                        setSearchUrl(e.target.value);
                    }}
                />
            </div>


            <SearchBoxX
                onClick={() => {
                    setSearchUrl('')
                    setShowX(false)
                    switchBackGroundColor(true)
                    navigate('/')
                }}
                backgroundColor={backgroundColor}
            >
                {
                    showX
                    &&
                    <RxCross1
                        size={30}
                    />
                }
            </SearchBoxX>

        </SearchBoxContainer>
    )
}

export default SearchBox;