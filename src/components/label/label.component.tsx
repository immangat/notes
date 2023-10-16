import {LabelContainer, LabelValue} from "./label.styles";


type LabelProps = {
    labelValue: string
}
const Label = ({labelValue}: LabelProps) => {
    return (
        <LabelContainer>
            <LabelValue>
                {labelValue}
            </LabelValue>
        </LabelContainer>
    )
}

export default Label