import React from 'react';

function ReportsChart() {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Savings</h1>
            <p style={styles.content}>WOW! I am impressed at how much this user has in their savings account!</p>
        </section>
    );
}

export default ReportsChart;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '2.25rem',
        color: 'rgba(255, 235, 245, 1)',
        width: '75rem',
        marginTop: '2rem',
    }
}