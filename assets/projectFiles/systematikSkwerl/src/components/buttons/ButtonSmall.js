import React from 'react'

//standard button component
const ButtonSmall = props => {
    return (
        <button style={styles.btn}>
            {props.btnText}
        </button>

    )
}
export default ButtonSmall

const styles = {
    btn: {
        background: 'rgba(37, 68, 65, 1)',
        color: 'rgba(126, 217, 87, 1)',
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        padding: '5px 10px',
        borderRadius: '7px',
        border: '1px solid rgba(126, 217, 87, 1)',
        cursor: 'pointer'
    }
}