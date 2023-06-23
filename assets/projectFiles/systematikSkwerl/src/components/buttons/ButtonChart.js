import React from 'react'
import styled from 'styled-components';

//standard button component
const ButtonStandard = props => {
    return (
        <Standard>
            {props.btnText}
        </Standard>

    )
}
export default ButtonStandard

const Standard = styled.button`
    height: 5rem;
    width: 5rem;
    background: none;
    font-size: 3.5rem;
    font-weight: 700;
    color: rgba(37, 68, 65, 1);
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
        color: rgba(247, 100, 107, 1);
    }
`