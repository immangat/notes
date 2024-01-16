import {BsFillTrashFill, BsArchive, BsBell} from 'react-icons/bs'
import {BiLabel} from "react-icons/bi";
import {FaRegStickyNote} from 'react-icons/fa'
import {MdOutlineEdit} from 'react-icons/md'
import {
    SideBarContainer,
    SideBarItemContainer, SideBarItemLogoContainer,
} from "./side-bar.styles";
import {useContext, useEffect, useRef, useState} from "react";
import {SideBarContext} from "../../contexts/side-bar.context";
import {NotesContext} from "../../contexts/notes.context";
import {useNavigate} from "react-router-dom";
import useMouseHover from "../../hooks/useMouseHover";

// export const SideBarTest = () => {
//     const [location, setLocation] = useState(window.location.href.split('/'))
//     const {isOpen} = useContext(SideBarContext)
//     const navigate = useNavigate();
//     const {toggleLabelModal, labels} = useContext(NotesContext)
//     const [showTitle, setShowTitle] = useState(false);
//     const sideBarRef = useRef<HTMLDivElement>(null)
//     const labelElements = labels.map(label =>
//         <SideBarListElement
//             selectList={location[4] === `label${label}`}
//         >
//             <ListItemsContainer
//                 onClick={() => {
//                     navigate(`/search/label${label}`)
//                     setLocation(window.location.href.split('/'))
//
//                 }}
//             >
//                 <div>
//                     <BiLabel/>
//                 </div>
//                 {showTitle && <span>{label}</span>}
//             </ListItemsContainer>
//         </SideBarListElement>
//     )
//     useEffect(() => {
//         setShowTitle(isOpen)
//         if (sideBarRef.current && isOpen) {
//             sideBarRef.current.style.position = "static"
//         }
//         if (sideBarRef.current && !isOpen) {
//             sideBarRef.current.style.position = "absolute"
//         }
//     }, [isOpen])
//
//     useEffect(() => {
//         if (sideBarRef.current && showTitle) {
//             sideBarRef.current.style.borderRight = "2px solid gray";
//             sideBarRef.current.style.width = "200px"
//         } else {
//             if (sideBarRef.current) {
//                 sideBarRef.current.style.borderRight = "2px solid white";
//                 sideBarRef.current.style.width = "50px"
//             }
//         }
//     }, [showTitle, sideBarRef])
//
//     return (
//         <SideBarContainer
//             ref={sideBarRef}
//             onMouseEnter={() => {
//                 if (!isOpen) setShowTitle(true)
//             }}
//             onMouseLeave={() => {
//                 if (!isOpen) setShowTitle(false)
//             }}
//         >
//             <SideBarList>
//                 <SideBarListElement
//                     selectList={location[3] === ''}
//                 >
//                     <ListItemsContainer
//                         onClick={() => {
//                             navigate('/')
//                             setLocation(window.location.href.split('/'))
//
//                         }}
//                     >
//                         <div>
//                             <FaRegStickyNote/>
//                         </div>
//                         {showTitle && <span>Notes</span>}
//                     </ListItemsContainer>
//                 </SideBarListElement>
//                 <SideBarListElement
//                     selectList={location[3] === 'reminders'}
//                 >
//                     <ListItemsContainer
//                         onClick={() => {
//                             navigate('/reminders')
//                             setLocation(window.location.href.split('/'))
//
//                         }}
//                     >
//                         <div>
//                             <BsBell/>
//                         </div>
//                         {showTitle && <span>Reminders</span>}
//                     </ListItemsContainer>
//                 </SideBarListElement>
//                 <SideBarListElement
//                     selectList={false}
//
//                 >
//                     <ListItemsContainer
//                         onClick={toggleLabelModal}
//                     >
//                         <div>
//                             <MdOutlineEdit/>
//                         </div>
//                         {showTitle && <span>Edit Labels</span>}
//                     </ListItemsContainer>
//                 </SideBarListElement>
//                 {labelElements}
//                 <SideBarListElement
//                     selectList={location[3] === 'archive'}
//                 >
//                     <ListItemsContainer
//                         onClick={() => {
//                             navigate('/archive')
//                             setLocation(window.location.href.split('/'))
//                         }}
//                     >
//                         <div>
//                             <BsArchive/>
//                         </div>
//                         {showTitle && <span>Archive</span>}
//                     </ListItemsContainer>
//                 </SideBarListElement>
//                 <SideBarListElement
//                     selectList={location[3] === 'trash'}
//                 >
//                     <ListItemsContainer
//                         onClick={() => {
//                             navigate('/trash')
//                             setLocation(window.location.href.split('/'))
//
//                         }}
//                     >
//                         <div>
//                             <BsFillTrashFill/>
//                         </div>
//                         {showTitle && <span>Trash</span>}
//                     </ListItemsContainer>
//                 </SideBarListElement>
//
//             </SideBarList>
//         </SideBarContainer>)
// }

const SideBar = () => {

    const {isOpen} = useContext(SideBarContext)
    const [location, setLocation] = useState(window.location.href.split('/'))
    const navigate = useNavigate();
    const {toggleLabelModal, labels} = useContext(NotesContext)
    const sideBarRef = useRef(null)
    const isHovering = useMouseHover(sideBarRef)

    useEffect(() => {
        console.log("location", location)
    }, [location]);
    const labelElements = labels.map(label =>
        <SideBarItemContainer

            onClick={() => {
                navigate(`/search/label${label}`)
                setLocation(window.location.href.split('/'))

            }}

            selectList={location[4] === `label${label}`}>
            <SideBarItemLogoContainer>
                <BiLabel/>
            </SideBarItemLogoContainer>
            <span>{label}</span>
        </SideBarItemContainer>
    )
    return (
        <SideBarContainer
            issidebaropen={isHovering || isOpen}
            ref={sideBarRef}
        >
            <SideBarItemContainer
                onClick={() => {
                    navigate('/')
                    setLocation(window.location.href.split('/'))

                }}
                selectList={location[3] === ''}
            >
                <SideBarItemLogoContainer>
                    <FaRegStickyNote/>
                </SideBarItemLogoContainer>
                <span>Notes</span>
            </SideBarItemContainer>
            <SideBarItemContainer
                onClick={() => {
                    navigate('/reminders')
                    setLocation(window.location.href.split('/'))

                }}
                selectList={location[4] === 'reminders'}

            >
                <SideBarItemLogoContainer>
                    <BsBell/>
                </SideBarItemLogoContainer>
                <span>Reminders</span>
            </SideBarItemContainer>
            <SideBarItemContainer
                onClick={toggleLabelModal}
                selectList={location[3] === 'editLabels'}
            >
                <SideBarItemLogoContainer>
                    <MdOutlineEdit/>
                </SideBarItemLogoContainer>
                <span>Edit Labels</span>
            </SideBarItemContainer>
            {labelElements}
            <SideBarItemContainer
                selectList={location[3] === 'archive'}
                onClick={() => {
                    navigate('/archive')
                    setLocation(window.location.href.split('/'))

                }}
            >
                <SideBarItemLogoContainer>
                    <BsArchive/>
                </SideBarItemLogoContainer>
                <span>Archive</span>
            </SideBarItemContainer>
            <SideBarItemContainer
                selectList={location[3] === 'trash'}

                onClick={() => {
                    navigate('/trash')
                    setLocation(window.location.href.split('/'))

                }}
            >
                <SideBarItemLogoContainer>
                    <BsFillTrashFill/>
                </SideBarItemLogoContainer>
                <span>Trash</span>
            </SideBarItemContainer>

        </SideBarContainer>
    )
        ;
};

export default SideBar;