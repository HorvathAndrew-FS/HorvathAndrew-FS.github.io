import React from 'react';
import AvatarImageURL from '../images/AvatarAndrew.svg';
import Avatar from '../components/Avatar';
import styled from 'styled-components';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const PostArticle = props => {
    return (
        <article style={styles.myPostArticle}>
            <img style={styles.postImg} src={props.val.pImg} alt={props.val.pAlt} />
            <div style={styles.content}>
                <div style={styles.titleGroup}>
                    <Avatar AvatarIcon={AvatarImageURL} />
                    <h2 style={styles.postTitle}>{props.val.pName}</h2>
                </div>
                    <p style={styles.postText}>{props.val.pText}</p>
            </div>
            <div style={styles.buttons}>
                <PostIcons><FaEdit /></PostIcons>
                <PostIcons><RiDeleteBin6Line onClick={props.deleteItem} /></PostIcons>
            </div>
        </article>
    )
}

export default PostArticle;

const PostIcons = styled.button`
        padding: 0;
        font-size: 3rem;
        background: none;
        border: none;
        margin-right: 2rem;
        color: rgba(37, 68, 65, 1);        
        &:hover {
            color: rgba(247, 100, 107, 1);
        }
`

const styles = {
    myPostArticle : {
    margin: '3rem 0 0 0',
    width: '100%',
    background: 'rgba(126, 217, 87, 1)',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    boxShadow: '10px 5px 10px rgba(255, 235, 245, .4), 0 6px 15px 0 rgba(255, 235, 245, .3)',
    },
    postImg: {
        width: '300px',
        flex: '40%',
        marginRight: '2rem',
    },
    content: {
        flex: '40%',
        width: '100%',
    },
    titleGroup: {
        display: 'flex',
        alignItems: 'center',
    },
    postTitle: {
        color: 'rgba(247, 100, 107, 1)',
        fontSize: '4rem',
        margin: '0 0 1rem 2rem',
    },
    postText: {
        marginTop: '1rem',
        color: 'rgba(37, 68, 65, 1)',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        letterSpacing: '.15rem',
        lineHeight: '2.5rem',
    },
    buttons: {
        marginTop: '2rem',
        width: '33%',
    }
}