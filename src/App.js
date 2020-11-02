import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";

function App() {
  return (
    <div className="App">
      <Header className="sheader" title="The Job Board"></Header>
      <Jobs className="sJobs"></Jobs>
    </div>
  );
}

export default App;
