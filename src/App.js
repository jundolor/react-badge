//import logo from './logo.svg';
//import './App.css';
import Badge from './components/Badge/index';

function App() {
  return (
    <>
      <Badge onOpen={()=> console.log('opened')}>
        <Badge.Container>Badge</Badge.Container>
        <Badge.RadioCorner></Badge.RadioCorner>
        <Badge.SelectColor></Badge.SelectColor>
      </Badge>
    </>
  );
}

export default App;
