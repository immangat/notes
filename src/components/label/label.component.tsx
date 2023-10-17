import {LabelContainer, LabelValue, LabelX} from "./label.styles";


type LabelProps = {
    labelValue: string
}
const Label = ({labelValue}: LabelProps) => {

    const deleteLabel = () => {
        console.log("delete me", labelValue)
    }
    return (
        <LabelContainer>
            <LabelValue>
                {labelValue}
            </LabelValue>
            <LabelX
                onClick={deleteLabel}
            >
                x
            </LabelX>
        </LabelContainer>
    )
}

export default Label