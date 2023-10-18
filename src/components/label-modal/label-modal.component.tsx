import React, {useContext, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import {
    AddLabelContainer,
    ExitButton,
    LabelsContainer,
    ModalBody,
    ModalContainer,
    ModalContent
} from "./label-modal.styles";
import ModalLabelItem from "../modal-label-item/modal-label-item.component";


const LabelModal = () => {

    const {labels, toggleLabelModal, addLabels, deleteFromAllNotes} = useContext(NotesContext)

    const [modalLabels, setModalLabels] = useState(labels)
    const [labelInput, setLabelInput] = useState('')
    const onClose = () => {
        toggleLabelModal();
        addLabels(modalLabels)
    }

    const deleteLabel = (label: string) => {
        setModalLabels(modalLabels.filter(modalLabel => modalLabel !== label))
        deleteFromAllNotes(label)
    }

    const labelElements = modalLabels.map(label =>
        <ModalLabelItem
            label={label}
            deleteLabel={() => deleteLabel(label)}
        />
    )

    return (

        <ModalContainer className="modal" onClick={onClose}>
            <ModalContent className="modal-content" onClick={onClose}>
                <ModalBody className="modal-body" onClick={e => e.stopPropagation()}>
                    <h1>
                        Edit Labels
                    </h1>
                    <LabelsContainer
                        onClick={
                            (event) => {
                                event.stopPropagation()
                            }
                        }
                    >
                        {labelElements}
                    </LabelsContainer>
                    <AddLabelContainer
                        onClick={
                            (event) => {
                                event.stopPropagation()
                            }
                        }
                    >
                        <input
                            placeholder="Add a label"
                            type='search'
                            onChange={(e) => {
                                const {value} = e.target
                                setLabelInput(value)
                            }}
                            value={labelInput}
                            onKeyDown={(e) => {
                                const {key} = e
                                if (key === 'Enter' && labelInput) {
                                    setModalLabels(prev => [...prev, labelInput])
                                    setLabelInput('')
                                }
                            }}
                        />
                    </AddLabelContainer>
                    <ExitButton
                        type="button"
                        onClick={onClose}
                    >
                        DONE
                    </ExitButton>
                </ModalBody>
            </ModalContent>
        </ModalContainer>


    )
}

export default LabelModal