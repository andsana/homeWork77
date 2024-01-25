import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import NewMessage from './containers/NewMessage/NewMessage';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-message" element={<NewMessage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
