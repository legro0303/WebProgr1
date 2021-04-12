import logo from './logo.svg';
import './App.css';
import List from './List'

function App() {
  const array = [
  {id: 1, content: 'firstElement'},
  {id: 2, content: 'secondElement'},
  {id: 3, content: 'thirdElement'},
  ];
  return (
    <List value = {array}>
    </List>);
}

export default App;
