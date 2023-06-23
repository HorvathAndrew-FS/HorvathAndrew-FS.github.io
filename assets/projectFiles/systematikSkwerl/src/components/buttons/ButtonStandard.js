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
    height: 7rem;
    width: 20rem;
    background: rgba(37, 68, 65, 1);
    font-size: 2rem;
    font-weight: 700;
    color: rgba(126, 217, 87, 1);
    text-transform: uppercase;
    border: 1px solid rgba(37, 68, 65, 1);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: rgba(247, 100, 107, 1);
    }
`