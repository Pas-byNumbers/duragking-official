import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from './containers/NavbarContainer'
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer';
import "./styles/app.css"
import ProfileContainer from './containers/ProfileContainer';
import NewsContainer from './containers/NewsContainer';
import { Switch, Route} from "react-router-dom"

const App = () => {
  

  return (
    <div>
      <HeaderContainer />
      <NavbarContainer />
      <Switch>
        <Route path="/news" component={NewsContainer} />
        <Route path="/profile" component={ProfileContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch>
      
    </div>
  );
}

export default App;