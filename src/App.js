import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {
  const title = "Welcome to my new blog"
  const likes = Math.floor((Math.random()*100))
  const link = "https://www.safaricom.co.ke/"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <br /><br /><br /><br /><br />
        <Create />
        <br /><br /><br /><br /><br /><br />
        <p>{Math.floor((Math.random()*100))}</p>
        <p> Received {likes} likes </p>
        <a href={link} target="_blank" >Link</a>
      </div>
    </div>
  );
}

export default App;
