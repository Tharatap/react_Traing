import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Tharatap  <span className="heart">♥️</span> React
        </p>
        <p>
          สวัสดีครับ<br />
          <a href="https://www.youtube.com/watch?v=Ntr8on06pZ8&list=RDNtr8on06pZ8&start_radio=1" target="_blank">เพลงดี</a>
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
