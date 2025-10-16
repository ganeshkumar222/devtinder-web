import { BrowserRouter , Route, Routes } from "react-router";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "../Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

export default function App() {
  return <>
  <Provider store={appStore}>
        <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
           <Route path="/" element={<Feed />}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/profile" element={<Profile />}/>
      </Route>
     </Routes>
     </BrowserRouter>
  </Provider>
 
  
  </>
    
  
}