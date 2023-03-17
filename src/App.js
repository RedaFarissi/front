import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {
  Header,Footer,Home,About,Orders,Shop,Contact,Search,Wishlist,Cart,UpdateUser,UserRegister,
  UserLogin
} from './component/index';

function App() {
  const [profile_click , setProfile_click] = useState(false) 
  const [header , setHeader] = useState({display:"flex"}) 
  const [header_admin , setHeader_admin] = useState({display:"none"}) 
  const profileClick =()=> { (profile_click)?  setProfile_click(false) :setProfile_click(true) }
  const aboutClick = ()=>{
      setHeader({display:"none"});
      setHeader_admin({display:"flex"});
  }
  return (
    <>
      <Router>
        <Header 
          profile_click={profile_click} 
          header={header} 
          header_admin={header_admin}
          profileClick={profileClick}
          aboutClick={aboutClick} 
        />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/update_user' element={<UpdateUser />}/>
          <Route path='/user_register' element={<UserRegister />}/>
          <Route path='/user_login' element={<UserLogin />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
