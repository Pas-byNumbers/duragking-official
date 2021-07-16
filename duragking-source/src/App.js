import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from './containers/NavbarContainer'
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer';
import ShopMensContainer from './containers/ShopMensContainer';
import ShopWomensContainer from './containers/ShopWomensContainer';
import ShopKidsContainer from './containers/ShopKidsContainer';
import "./styles/app.css"
import ProfileContainer from './containers/ProfileContainer';
import NewsContainer from './containers/NewsContainer';
import ContactContainer from './containers/ContactContainer';
import { Switch, Route} from "react-router-dom"

const App = () => {
  

  return (
    <div>
      <HeaderContainer />
      <NavbarContainer />
      <Switch>
        <Route path="/news" component={NewsContainer} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/shop/men" component={ShopMensContainer} />
        <Route path="/shop/women" component={ShopWomensContainer} />
        <Route path="/shop/kids" component={ShopKidsContainer} />
        <Route path="/contact" component={ContactContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch>
      
    </div>
  );
}

export default App;