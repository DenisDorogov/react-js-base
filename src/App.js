import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from "./components/Content/Content.module.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      < Header/>
      < Sidebar/>
      <div className={style.content}>
                <Routes>  
                    <Route exact path="/dialogs" element={<Dialogs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
      {/* <Routes>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </Routes> */}
      


      {/* < Content/> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
