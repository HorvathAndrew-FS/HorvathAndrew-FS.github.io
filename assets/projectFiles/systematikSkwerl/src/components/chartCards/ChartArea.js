import React from 'react';
import AreaCharts from '../charts/AreaCharts';

const ChartArea = ({chartArea}) => {
    return (
        <article key={chartArea.id} style={styles.card}>
            <h1 style={styles.title}>{chartArea.chartHeader}</h1>
            <h2 style={styles.subTitle}>{chartArea.chartsubHeader}</h2>
            <AreaCharts />
        </article>
    )
};

export default ChartArea;

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        minHeight: '100%',
        background: '#fff',
        margin: '1rem',
        padding: '1rem',
        width: '50%',
        color: 'rgba(37, 68, 65, 1)',
        fontSize: '1.6rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '1rem 0 .5rem 2.5rem',
        color: 'rgba(37, 68, 65, 1)',
    },
    subTitle: {
        fontSize: '2rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        margin: '0rem 0 2rem 2.5rem',
        color: 'rgba(247, 100, 107, 1)',
    }

}