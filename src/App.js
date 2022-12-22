import logo from './logo.svg';
import './App.css';
import { FavoriteFood } from './components/FavoriteFood';
import { Heading } from './components/Heading';
import { MathView } from './components/MathView';
import { PersonInfo } from './components/PersonInfo';
import { Hooks } from './components/Hooks/Hooks';
import { Greetings } from './components/Greetings';
import { Time } from './components/Time/Time';
import { Hello } from './components/Hello/Hello';

function App() {
  return (
    <div className="App">
      <Heading />
      <FavoriteFood />
      <FavoriteFood />
      <MathView />
      <Greetings />
      <PersonInfo
        name="Александр"
        email="email@gmail.com"
        avatarLink="https://tenor.com/ru/view/soul-eater-anniehasleftoop-gif-20457390.gif"
        phoneNumber="89005353535"
      />
      <Hooks />
      <Time />
      <Hello />
    </div>
  );
}

export default App;