import React from 'react';
import RadBarCharts from '../charts/RadBarCharts';

const ChartRadBar = ({chartradBar}) => {
    return (
        <article key={chartradBar.id} style={styles.card}>
            <h1 style={styles.title}>{chartradBar.chartHeader}</h1>
            <RadBarCharts />
        </article>
    )
};

export default ChartRadBar;

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        background: '#fff',
        margin: '1rem',
        padding: '1rem',
        width: '100%',
        // height: '100%',
        color: 'rgba(37, 68, 65, 1)',
        fontSize: '1.6rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '1rem 0 2rem 2.5rem',
        color: 'rgba(247, 100, 107, 1)',
    }
}