import React, {InputHTMLAttributes, useContext, useEffect, useState} from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import {useNavigate} from "react-router-dom";
import {NavBarContext} from "../../contexts/nav-bar.context";
import {
    CancelButton, NavBarSearchButton, NavBarSearchContainer,
    NavBarSearchInput,
    NavBarSearchInputContainer, ReloadContainer,
    SearchButton,
    SearchForm,
    SearchFormContainer
} from "./search-box.styles"
import {TailSpin} from "react-loader-spinner";
import {IoReload} from "react-icons/io5";
import {NotesContext} from "../../contexts/notes.context";

type SearchBoxTypes = {} & InputHTMLAttributes<HTMLInputElement>
const SearchBox = (props: SearchBoxTypes) => {

    const navigate = useNavigate()
    const [searchUrl, setSearchUrl] = useState('')
    const [showX, setShowX] = useState(false)
    const {reset} = useContext(NavBarContext)
    const {loadingNavBar} = useContext(NotesContext)


    useEffect(() => {
        navigate(`/search/text${searchUrl}`);
    }, [searchUrl])

    useEffect(() => {
        setSearchUrl('')
        setShowX(false)
    }, [reset])
    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <NavBarSearchContainer>
            <SearchFormContainer>
                <SearchForm
                    showBorder={showX}
                    onClick={e => e.preventDefault()}
                >
                    <SearchButton
                        title="search"
                        onClick={() => {
                            navigate(`/search/text${searchUrl}`)
                            setShowX(true)
                        }}
                    >
                        <AiOutlineSearch size={25}/>
                    </SearchButton>
                    <NavBarSearchInputContainer>
                        <NavBarSearchInput
                            value={searchUrl}
                            type={'text'}
                            placeholder={"Search"}
                            onChange={e => setSearchUrl(e.target.value)}
                            onClick={() => {
                                //navigate(`/search/text${searchUrl}`)
                                setShowX(true)
                            }}
                        />

                    </NavBarSearchInputContainer>
                    <CancelButton
                        showX={showX}
                        onClick={() => {
                            setSearchUrl('')
                            setShowX(false)
                            navigate('/')
                        }}
                    >
                        <RxCross1
                            size={25}
                        />
                    </CancelButton>
                </SearchForm>
            </SearchFormContainer>
            <ReloadContainer>
                <NavBarSearchButton>
                    {
                        loadingNavBar
                            ?
                            <TailSpin
                                height="20"
                                width="20"
                                color="black"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                            <IoReload
                                size={25}
                            />

                    }
                </NavBarSearchButton>
            </ReloadContainer>
        </NavBarSearchContainer>)
}

export default SearchBox;