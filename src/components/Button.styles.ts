import styled,{css}from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' |'success';

interface ButtonCOntainerProps {
    variant:ButtonVariant
}

const buttonVariants = {
    primary:'purple',
    secondary:'orange',
    danger:'red',
    success:'green'
}
export const ButtonContainer = styled.button<ButtonCOntainerProps>`
    width: 100px;
    height:  40px;
    border-radius: 8px;
    margin: 10px;

    background-color: ${({theme}) => theme.primary};
    /* ${(props) => {
        return css`
            background-color: ${buttonVariants[props.variant]};
        `
    }}    */
`