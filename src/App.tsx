import './App.scss';

import Card from './card/Card';

function App() {

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
