import {BsFillTrashFill, BsArchive, BsBell} from 'react-icons/bs'
import {FaRegStickyNote} from 'react-icons/fa'
import {MdOutlineEdit} from 'react-icons/md'
import {ListItemsContainer, SideBarContainer, SideBarList} from "./side-bar.styles";
import {useContext, useEffect, useRef, useState} from "react";
import {SideBarContext} from "../../contexts/side-bar.context";

const SideBar = () => {
    const {isOpen} = useContext(SideBarContext)
    const [showTitle, setShowTitle] = useState(false);
    const sideBarRef = useRef<HTMLDivElement>(null)
    console.log(isOpen)
    useEffect(() => {
        setShowTitle(isOpen)
        if (sideBarRef.current && isOpen) {
            sideBarRef.current.style.position = "static"
        }
        if(sideBarRef.current && !isOpen){
            sideBarRef.current.style.position = "absolute"
        }
    }, [isOpen])

    useEffect(() => {
        console.log("Inside the useEffect")
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
                <li>
                    <ListItemsContainer>
                        <div>
                            <FaRegStickyNote/>
                        </div>
                        {showTitle && <span>Notes</span>}
                    </ListItemsContainer>
                </li>
                <li>
                    <ListItemsContainer>
                        <div>
                            <BsBell/>
                        </div>
                        {showTitle && <span>Reminders</span>}
                    </ListItemsContainer>
                </li>
                <li>
                    <ListItemsContainer>
                        <div>
                            <MdOutlineEdit/>
                        </div>
                        {showTitle && <span>Edit Labels</span>}
                    </ListItemsContainer>
                </li>
                <li>
                    <ListItemsContainer>
                        <div>
                            <BsArchive/>
                        </div>
                        {showTitle && <span>Archive</span>}
                    </ListItemsContainer>
                </li>
                <li>
                    <ListItemsContainer>
                        <div>
                            <BsFillTrashFill/>
                        </div>
                        {showTitle && <span>Trash</span>}
                    </ListItemsContainer>
                </li>

            </SideBarList>
        </SideBarContainer>)
}

export default SideBar;