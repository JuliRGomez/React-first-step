// import logo from './logo.svg';
// import Feed from './components/feed'
import Profile from './components/profile'
import Interests from './components/interests'
import './App.css';
import './grid.css';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Profile />
        <Interests />
      </div>
    </div>
  );
}

export default App;
