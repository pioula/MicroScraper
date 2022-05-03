import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../defaultLayout';
import Home from '~/pages/Home';
import AuthContext, { authContextContent } from '~/contexts/authContext';

function App() {
  return (
    <AuthContext.Provider value={authContextContent}>
      <Layout>
        <Home />
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
