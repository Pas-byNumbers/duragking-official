import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from './containers/NavbarContainer'
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer';
import "./styles/app.css"
import UserContainer from './containers/UserContainer';
import React, { useState, useEffect } from 'react'
import NewsContainer from './containers/NewsContainer';

const App = () => {
  const [ pageServe, setPageServe ] = React.useState(<HomeContainer />)

  const determinePageServe = (requestedPage) => {
    switch(requestedPage) {
      case "home" :
        console.log(requestedPage)
        setPageServe(<HomeContainer />)
        break;
      case "user" :
        console.log(requestedPage)
        setPageServe(<UserContainer />)
        break;
      case "news" :
        console.log(requestedPage)
        setPageServe(<NewsContainer />)
        break;

        default :
        return <HomeContainer />
    }
  }

  /* const usePageServing = () => {
    useEffect(() => {
      return pageServe
    }, [])
  } */

  return (
    <div>
      <HeaderContainer />
      <NavbarContainer determinePageServe={determinePageServe} />
      {
        pageServe
      }
      
    </div>
  );
}

export default App;