import React from 'react';

const MyAd = props => {
    return (
        <article style={styles.articleAd}>
            <img src={props.articleImg} alt={props.articleAlt} />
            <h1 style={styles.articleTitle}>{props.articleTitle}</h1>
            <h2 style={styles.articleStatement}>{props.articleStatement}</h2>
            <p style={styles.articleText}>{props.articleText}
            </p>
            <div style={styles.buttons}>
                <button type="submit" style={styles.cardButton}>Share</button>
                <button type="submit" style={styles.cardButton}>More Stuff</button>
            </div>
        </article>
    )
}
export default MyAd;

const styles = {
    articleAd: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '3%',
        background: 'rgba(37, 68, 65, 1)',
        borderRadius: '1rem',
        boxShadow: '0 5px 8px 0 rgba(37, 68, 65, .2), 0 6px 20px 0 rgba(37, 68, 65, .5)',
        textAlign: 'center',
        margin: '1rem'
    },
    articleTitle: {
        margin: '1rem 0',
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        color: 'rgba(247, 100, 107, 1)'
    },
    articleStatement: {
       margin: '0 auto 1rem',
        width: '90%',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        letterSpacing: '.2rem',
        color: 'rgba(255, 235, 245, 1)',
        textAlign: 'left'
    },
    articleText: {
        margin: '0 auto',
        width: '90%',
        fontSize: '1.3rem',
        letterSpacing: '.2rem',
        color: 'rgba(255, 235, 245, 1)',
        textAlign: 'left'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: '1rem 0rem 0 0',
    },
    cardButton: {
        padding: '.5rem',
        borderRadius: '.25rem',
        border: 'none',
        margin: '0 0 0 1rem',
        fontSize: '1.3rem',
        letterSpacing: '.1rem',
        color: 'rgba(126, 217, 87, 1)',
        background: 'none'


    }
}