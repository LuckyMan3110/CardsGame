import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/molecules/NotFound'
import SignIn from '../../pages/Auth/SignIn';
import SignUp from '../../pages/Auth/SignUp';
import Verify from '../../pages/Auth/Verify';
import Profile from "../../pages/Profile";
import Dashboard from "../../pages/Dashboard";


import {
    Home
} from '../../pages'
import * as path from "path";
import CreateGame from "../../pages/Game/CreateGame/index.jsx";
import OpenGame from "../../pages/Game/OpenGame/index.jsx";
import JoinGame from "../../pages/Game/JoinGame/index.jsx";
import { Game } from '../../components/index.jsx';

const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />

      <Route path='/opengame' element={<OpenGame />} />
      <Route path='/creategame' element={<CreateGame/>} />
      <Route path='/joingame' element={<JoinGame/>} />
      <Route path='/openroom' element={<Game></Game>} />
      {/* Route Admin */}
    

      {/* Route Not Found 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default AppRoutes;
