import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MobileContainer from "./components/MobileContainer/MobileContainer";
import Hello from "./pages/Hello/Hello";
import BaseRegistry from "./pages/BaseRegistry/BaseRegistry";
import MainRegistry from "./pages/MainRegistry/MainRegistry";
import ConfirmRegistration from "./pages/ConfirmRegistration/ConfirmRegistration";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} >
            <Route path={'/'} element={<Hello/>}/>
            <Route path={'/base_registry'} element={<BaseRegistry/>}/>
            <Route path={'/main_registry'} element={<MainRegistry/>}/>
            <Route path={'/confirm_code'} element={<ConfirmRegistration/>}/>
        </Route>
    )
);

function App() {
  return (
      <MobileContainer>
          <RouterProvider router={router} />
      </MobileContainer>
  );
}

export default App;
