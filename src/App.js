// import logo from './logo.svg';
// import Feed from './components/feed'
import Profile from './components/profile'
import Interests from './components/interests'
import Learn from './components/learn'
import Expectetions from './components/expectations';
import './App.css';
import './grid.css';
import './styles.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        <Profile />
        <Interests />
        <Learn />
        <Expectetions />
      </div>
    </div>
  );
}

export default App;
