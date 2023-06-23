import React from 'react'

//my avatar component
const Avatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.Avatar} />
    )
}
export default Avatar

const styles = {
    Avatar: {
        height: '4.5rem',
        cursor: 'pointer',
        borderRadius: '50%',
    }
}