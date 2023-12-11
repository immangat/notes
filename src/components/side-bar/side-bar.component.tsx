import {BsFillTrashFill, BsArchive, BsBell} from 'react-icons/bs'
import {BiLabel} from "react-icons/bi";
import {FaRegStickyNote} from 'react-icons/fa'
import {MdOutlineEdit} from 'react-icons/md'
import {ListItemsContainer, SideBarContainer, SideBarList, SideBarListElement} from "./side-bar.styles";
import {useContext, useEffect, useRef, useState} from "react";
import {SideBarContext} from "../../contexts/side-bar.context";
import {NotesContext} from "../../contexts/notes.context";
import {useNavigate} from "react-router-dom";


const SideBar = () => {
    const [location, setLocation] = useState(window.location.href.split('/'))
    const {isOpen} = useContext(SideBarContext)
    const navigate = useNavigate();
    const {toggleLabelModal, labels} = useContext(NotesContext)
    const [showTitle, setShowTitle] = useState(false);
    const sideBarRef = useRef<HTMLDivElement>(null)

    const labelElements = labels.map(label =>
        <SideBarListElement
            selectList={location[4] === `label${label}`}
        >
            <ListItemsContainer
                onClick={() => {
                    navigate(`/search/label${label}`)
                    setLocation(window.location.href.split('/'))

                }}
            >
                <div>
                    <BiLabel/>
                </div>
                {showTitle && <span>{label}</span>}
            </ListItemsContainer>
        </SideBarListElement>
    )
    useEffect(() => {
        setShowTitle(isOpen)
        if (sideBarRef.current && isOpen) {
            sideBarRef.current.style.position = "static"
        }
        if (sideBarRef.current && !isOpen) {
            sideBarRef.current.style.position = "absolute"
        }
    }, [isOpen])

    useEffect(() => {
        if (sideBarRef.current && showTitle) {
            sideBarRef.current.style.borderRight = "2px solid gray";
            sideBarRef.current.style.width = "200px"
        } else {
            if (sideBarRef.current) {
                sideBarRef.current.style.borderRight = "2px solid white";
                sideBarRef.current.style.width = "50px"
            }
        }
    }, [showTitle, sideBarRef])

    return (
        <SideBarContainer
            ref={sideBarRef}
            onMouseEnter={() => {
                if (!isOpen) setShowTitle(true)
            }}
            onMouseLeave={() => {
                if (!isOpen) setShowTitle(false)
            }}
        >
            <SideBarList>
                <SideBarListElement
                    selectList={location[3] === ''}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/')
                            setLocation(window.location.href.split('/'))

                        }}
                    >
                        <div>
                            <FaRegStickyNote/>
                        </div>
                        {showTitle && <span>Notes</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={location[3] === 'reminders'}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/reminders')
                            setLocation(window.location.href.split('/'))

                        }}
                    >
                        <div>
                            <BsBell/>
                        </div>
                        {showTitle && <span>Reminders</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={false}

                >
                    <ListItemsContainer
                        onClick={toggleLabelModal}
                    >
                        <div>
                            <MdOutlineEdit/>
                        </div>
                        {showTitle && <span>Edit Labels</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                {labelElements}
                <SideBarListElement
                    selectList={location[3] === 'archive'}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/archive')
                            setLocation(window.location.href.split('/'))
                        }}
                    >
                        <div>
                            <BsArchive/>
                        </div>
                        {showTitle && <span>Archive</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={location[3] === 'trash'}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/trash')
                            setLocation(window.location.href.split('/'))

                        }}
                    >
                        <div>
                            <BsFillTrashFill/>
                        </div>
                        {showTitle && <span>Trash</span>}
                    </ListItemsContainer>
                </SideBarListElement>

            </SideBarList>
        </SideBarContainer>)
}

export default SideBar;