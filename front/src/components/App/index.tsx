import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from '~/pages/Home';

import Layout from '~/components/defaultLayout';

import UserContext, { userContextContent } from '~/contexts/userContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "~/pages/Posts";
import { useState } from "react";
import post_t from "~/services/post_t";

function App() {
  const [userPosts, setPosts] = useState<Array<post_t>>([]);
  return (
    <Router>
        <UserContext.Provider value={{ ...userContextContent, usersPosts: userPosts, setPosts: setPosts}}>
          <Layout>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/posts" element={ <Posts /> } />
            </Routes> 
          </Layout>
        </UserContext.Provider>
    </Router>
    
  );
}

export default App;
