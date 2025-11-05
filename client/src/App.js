import logo from './logo.svg';
import api from './services/api';
import './App.css';
import {useState} from "react";

function App() {
    const [textFromApi, setTextFromApi] = useState("NOT CALLED YET")
    const onbuttonClick = () => {
        api.get('/about')
            .then(response => {
                console.log('Health check response:', response.data);
                setTextFromApi(response.data);
            })
            .catch(error => {
                console.error('Error during health check:', error);
            });
    }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              read from API: {textFromApi}
            </p>
              <button onClick={onbuttonClick} >Click ME</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
}

export default App;
