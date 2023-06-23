import React, {useState} from 'react';
import ChartRadBar from '../components/chartCards/ChartRadBar';
import ChartArea from '../components/chartCards/ChartArea';
import ChartHorz from '../components/chartCards/ChartHorz';

function Dashboard() {
    const [pageTitle] = ['Dashboard'];
    const [chartHorz] = useState([
        {chartHeader: 'Income Overview'},
        {chartHeader: 'Savings Overview'}
    ]);
    const [chartradBar] = useState([
        {chartHeader: 'Income'},
        {chartHeader: 'Savings'},
        {chartHeader: 'Spending'}
    ]);
    const [chartArea] = useState([
        {
            chartHeader: 'Savings Overview',
            chartsubHeader: 'Start Saving Today!'
        },
        {
            chartHeader: 'Savings Overview',
            chartsubHeader: 'Start Saving Today!'
        }
    ]);

    return (
        <section style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>{pageTitle}</h1>
            </header>
            <p style={styles.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz key={id} id={id} chartHorz={chartHorz} />
                ))}
            </p>
            <p style={styles.row}>
                {chartradBar.map ((chartradBar, id) =>(
                    <ChartRadBar key={id} id={id} chartradBar={chartradBar} />
                ))}
            </p>
            <p style={styles.row}>
                {chartArea.map ((chartArea, id) => (
                    <ChartArea key={id} id={id} chartArea={chartArea} />
                ))}
            </p>
        </section>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        fontFamily: 'Montserrat',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: '1rem',
        marginBottom: '3rem',
        width: '100%',
        height: '100%',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chartHorz: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '3rem',
    },
    title: {
        fontSize: '5rem',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
        margin: '0 0 1rem 1rem',
    },

}