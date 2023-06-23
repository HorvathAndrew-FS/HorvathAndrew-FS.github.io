import { Routes, Route } from 'react-router-dom';
import Header from './components/HeaderChart';
import Nav from './components/NavChart';
import Dashboard from './pages/Dashboard';
import ReportsChart from './pages/ReportsChart';
import IncomeChart from './pages/IncomeChart';
import SavingChart from './pages/SavingChart';
import SpendingChart from './pages/SpendingChart';
import Settings from './pages/UserSettings';

function App() {
  return (
    <div>
      <Header />
        <main style={styles.container}>
          <Nav style={styles.navLeft} />
            <section style={styles.sectionContent}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='settingChart' element={<Settings />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='reportsChart' element={<ReportsChart />} />
                <Route path='incomeChart' element={<IncomeChart />} />
                <Route path='savingChart' element={<SavingChart />} />
                <Route path='spendingChart' element={<SpendingChart />} />
              </Routes>
            </section>
        </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '0 1rem',
    background: 'rgba(255, 235, 245, 1)',
  },
  sectionContent: {
    width: '95%',
    height: 'fit-content',
    background: 'rgba(37, 68, 65, 1)',
    color: 'rgba(255, 235, 245, 1)',
    padding: '2rem 5rem 5rem 5rem',
    borderRadius: '1rem',
  },
  navLeft: {
    // display: 'flex',
    // flexDirection: 'column',
    // paddingTop: 10,
  },
}