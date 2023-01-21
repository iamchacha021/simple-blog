import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = "Welcome to my new blog"
  const likes = Math.floor((Math.random()*100))
  const link = "https://www.safaricom.co.ke/"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <br /><br /><br /><br /><br />
          
          <br /><br /><br /><br /><br /><br />
          <p>{Math.floor((Math.random()*100))}</p>
          <p> Received {likes} likes </p>
          <a href={link} target="_blank" >Link</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
