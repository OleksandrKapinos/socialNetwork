import React from 'react';
import './App.css';

import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";

const App = (props) => {

    return (

        <div className='app_wrapper'>
            <Header/>
            <Navbar state={props.state.navElements}/>
            <div className='app_content'>
                <Route path='/profile'
                       render={() =>
                           <Profile state={props.state.profilePage}
                                    dispatch={props.dispatch}
                           />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    )

}

export default App;
