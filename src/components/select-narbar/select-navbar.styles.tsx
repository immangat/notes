import styled, {keyframes} from "styled-components";


type SelectHeaderPropsType = {
    showSelectNavBar: boolean
}
const SelectNavBarAnimationIn = keyframes`
    0% {
        transform: translateY(-100%);
    }
    2% {
        transform: translateY(-97%);
    }
    4% {
        transform: translateY(-94%);
    }
    6% {
        transform: translateY(-91%);
    }
    8% {
        transform: translateY(-88%);
    }
    10% {
        transform: translateY(-85%);
    }
    12% {
        transform: translateY(-82%);
    }
    14% {
        transform: translateY(-79%);
    }
    16% {
        transform: translateY(-76%);
    }
    18% {
        transform: translateY(-73%);
    }
    20% {
        transform: translateY(-70%);
    }
    22% {
        transform: translateY(-67%);
    }
    24% {
        transform: translateY(-64%);
    }
    26% {
        transform: translateY(-61%);
    }
    28% {
        transform: translateY(-58%);
    }
    30% {
        transform: translateY(-55%);
    }
    32% {
        transform: translateY(-52%);
    }
    34% {
        transform: translateY(-49%);
    }
    36% {
        transform: translateY(-46%);
    }
    38% {
        transform: translateY(-43%);
    }
    40% {
        transform: translateY(-40%);
    }
    42% {
        transform: translateY(-37%);
    }
    44% {
        transform: translateY(-34%);
    }
    46% {
        transform: translateY(-31%);
    }
    48% {
        transform: translateY(-28%);
    }
    50% {
        transform: translateY(-25%);
    }
    52% {
        transform: translateY(-22%);
    }
    54% {
        transform: translateY(-19%);
    }
    56% {
        transform: translateY(-16%);
    }
    58% {
        transform: translateY(-13%);
    }
    60% {
        transform: translateY(-10%);
    }
    62% {
        transform: translateY(-7%);
    }
    64% {
        transform: translateY(-4%);
    }
    66% {
        transform: translateY(-1%);
    }
    64% {
        transform: translateY(0%);
    }
`
export const Header = styled.header<SelectHeaderPropsType>`
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    height: 7%;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    transform: ${(props) => props.showSelectNavBar ? "translateY(-100%)" : "translateY(0)"};
    transition-timing-function: ease-in;
    transition: 0.2s;
    //transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
`


export const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`

export const HeaderContentItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const MenuIconContainer = styled.div`
    padding: 0 0 0 0;

`

export const SelectItemsContainer = styled.div`


`

export const NavBarSearchButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    background-color: transparent;

    &:hover {
        transform: scale(1.1);
    }
`