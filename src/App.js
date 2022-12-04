import './App.css';
import Layout from './Component/Layout/Layout';
import { useStatusMenu } from './Component/UI/Data';

function App() {
  const menu = useStatusMenu();
  return (
    <div className="App" onClick={() => menu.setStatus(false)}>
      <Layout></Layout>
      {menu.status && <div className='backdrop'></div>}
    </div>
  );
}

export default App;
