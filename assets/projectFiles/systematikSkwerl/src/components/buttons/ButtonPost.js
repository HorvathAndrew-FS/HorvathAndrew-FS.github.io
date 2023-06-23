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
    width: 15rem;
    background: rgba(37, 68, 65, 1);
    font-size: 1.7rem;
    font-weight: 700;
    color: rgba(126, 217, 87, 1);
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: rgba(247, 100, 107, 1);
        color: rgba(37, 68, 65, 1);
    }
`