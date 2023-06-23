import React from 'react';
import styled from 'styled-components';
import Button from './buttons/ButtonOutline';
import AvatarImageURL from '../images/AvatarAndrew.svg';
import Avatar from '../components/Avatar';

const PostForm = props => {
    return (
        <StyleComp>
            <form onSubmit={props.addItem}>
                <input
                name="pName"
                value={props.pName}
                onChange={props.getInput}
                placeholder="Post Title" />
                <div className="form-group">
                    <Avatar AvatarIcon={AvatarImageURL} />
                    <textarea
                    name="pText"
                    value={props.pText}
                    onChange={props.getInput}
                    placeholder="What's Your Boggle?" />
                </div>
                <div className="form-group-2">
                    <input
                    className="input-image"
                    name="pImg"
                    value={props.pImg}
                    onChange={props.getInput}
                    placeholder="Add Image" />
                    <Button {...props} />
                </div>
            </form>
        </StyleComp>
    )
};
export default PostForm;

const StyleComp = styled.div`
    form {
        width: 100%;
        background: rgba(67, 170, 139, 1);
        padding: 2rem;
        box-shadow: 0 4px 8px rgba(255, 235, 245, .2) 0 6px 20px 0 rgba(255, 235, 245, .3);
    }
    input {
        width: 100%;
        padding: 1rem;
        margin: 0 0 1rem 0;
        font-size: 3rem;
        outline: none;
    }
    input::placeholder {
        font-size: 2rem;
    }
    .input-image {
        width: 33%;
        padding: .5rem;
    }
    textarea {
        width: 90%;
        height: fit-content;
        padding: 1rem 1.5rem 1.5rem;
        border: none;
        margin: 0 0 1rem 1rem;
        background: none;
        font-size: 3rem;
        color: rgba(255, 235, 245, 1);
        resize: none;
        outline: none;
    }
    textarea::placeholder {
        color: rgba(37, 68, 65, 1);
        font-size: 3rem;
        line-height: 8rem;
    }
    input:focus {
        border: 2px solid rgba(247, 100, 107, 1);
        box-shadow: inset 0 0px 7px rgba(247, 100, 107, 1);
    }
    textarea:focus {
        
        &::placeholder {
            color: rgba(255, 235, 245, 1);
        }
    }
    .form-group {
        display: flex;
        align-items: center;
    }
    .form-group-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem 0 0;
    }
`;