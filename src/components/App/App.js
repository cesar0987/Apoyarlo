import './App.css';
import PersoneCard from '../PersoneCard/PersoneCard';

function App() {
  return (
    <div className="App">
      <PersoneCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />\
      <PersoneCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <PersoneCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <PersoneCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
