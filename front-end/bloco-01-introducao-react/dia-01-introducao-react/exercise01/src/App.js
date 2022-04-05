import './App.css';

const Task = (value) => {
  return (
    value.map((task) => <li>{task}</li>)
  );
}

const taskList = ['Estudar', 'Comparecer nas monitorias', 'Realizar projetos'];

function App() {
  return (
    <div>{Task(taskList)}</div>
  );
}

export default App;
