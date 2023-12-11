import {BsFillTrashFill, BsArchive, BsBell} from 'react-icons/bs'
import {BiLabel} from "react-icons/bi";
import {FaRegStickyNote} from 'react-icons/fa'
import {MdOutlineEdit} from 'react-icons/md'
import {ListItemsContainer, SideBarContainer, SideBarList, SideBarListElement} from "./side-bar.styles";
import {useContext, useEffect, useRef, useState} from "react";
import {SideBarContext} from "../../contexts/side-bar.context";
import {NotesContext} from "../../contexts/notes.context";
import {useNavigate} from "react-router-dom";


type ClickedObject = {
    [key: string]: boolean;
};

const initialClickedObject = {
    "notesClicked": true,
    "remindersClicked": false,
    "editLabelsClicked": false,
    "archiveClicked": false,
    "trashClicked": false
}

const initialClickedObjectAfter = {
    "notesClicked": false,
    "remindersClicked": false,
    "editLabelsClicked": false,
    "archiveClicked": false,
    "trashClicked": false
}

const makeClickedObject = (labels: string[], selectInitialObject: boolean = true) => {
    let temp = selectInitialObject ? initialClickedObjectAfter : initialClickedObject
    labels.forEach(label => {
        temp = {
            ...temp,
            [label.toLowerCase() + "Clicked"]: false
        }
    })
    return temp
}

const SideBar = () => {
    const location = window.location.href
    const {isOpen} = useContext(SideBarContext)
    const navigate = useNavigate();
    const {toggleLabelModal, labels} = useContext(NotesContext)
    const [showTitle, setShowTitle] = useState(false);
    const sideBarRef = useRef<HTMLDivElement>(null)
    const [sideBarClicked, setSideBarClicked] = useState<ClickedObject>(makeClickedObject(labels, false))
    console.log("location", location)

    const changeClickedObject = (value: string) => {
        const temp = makeClickedObject(labels)
        console.log(value)
        setSideBarClicked({
            ...temp,
            [value.toLowerCase() + "Clicked"]: true
        })

    }
    console.log(sideBarClicked)
    const labelElements = labels.map(label =>
        <SideBarListElement
            onClick={() => {
                changeClickedObject(label)
            }}
            selectList={sideBarClicked[label.toLowerCase() + "Clicked"]}
        >
            <ListItemsContainer
                onClick={() => {
                    navigate(`/search/label${label}`)

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

    useEffect(() => {
        setSideBarClicked(makeClickedObject(labels, false))
    }, [labels])


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
                    selectList={sideBarClicked.notesClicked}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/')

                        }}
                    >
                        <div>
                            <FaRegStickyNote/>
                        </div>
                        {showTitle && <span>Notes</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={sideBarClicked.remindersClicked}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/reminders')

                        }}
                    >
                        <div>
                            <BsBell/>
                        </div>
                        {showTitle && <span>Reminders</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={sideBarClicked.editLabelsClicked}

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
                    selectList={sideBarClicked.archiveClicked}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/archive')
                        }}
                    >
                        <div>
                            <BsArchive/>
                        </div>
                        {showTitle && <span>Archive</span>}
                    </ListItemsContainer>
                </SideBarListElement>
                <SideBarListElement
                    selectList={sideBarClicked.trashClicked}
                >
                    <ListItemsContainer
                        onClick={() => {
                            navigate('/trash')

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