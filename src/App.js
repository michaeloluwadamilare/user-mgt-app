import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import CreateUser from "./CreateUser";
import UserDetail from "./UserDetail";
import Notfound from "./Notfound";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<CreateUser/>} />
            <Route path="/users/:id" element={<UserDetail/>} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
 