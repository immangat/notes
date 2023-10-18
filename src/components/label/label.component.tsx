import {LabelContainer, LabelValue, LabelX} from "./label.styles";


type LabelProps = {
    labelValue: string
    deleteLabel: (label: string) => void
}
const Label = ({labelValue, deleteLabel}: LabelProps) => {

    const deleteItself = () => {
        deleteLabel(labelValue)
    }
    return (
        <LabelContainer>
            <LabelValue>
                {labelValue}
            </LabelValue>
            <LabelX
                onClick={deleteItself}
            >
                x
            </LabelX>
        </LabelContainer>
    )
}

export default Label