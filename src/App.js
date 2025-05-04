import './App.css';
import NavigationBar from './NavigationBar.js'
import styles from './headBanner.module.css'


function App() {
  return (
    <div className="App">
      <h1 className={styles.headBanner}>Welcome to caligula.today.portifolio</h1>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
