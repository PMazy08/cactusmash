import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import LoginPage from './Pages/Login/Login';
import RegisterPage from './Pages/Register/Register';
import ProfilePage from './Pages/Profile/Profile';
import ToptenPage from './Pages/Topten/Topten';
import VsPage from './Pages/Vs/VS';
import UsersPage from './Pages/Users/Users';
import ProfileallPage from './Pages/Profileall/Phofileall';

function App() {

  const routers = createBrowserRouter(
    [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage/>},
      { path: "/profile", element: <ProfilePage/>},
      { path: "/profile/:uId", element: <ProfileallPage/>},
      
      { path: "/top-10", element: <ToptenPage/>},
      { path: "/vs", element: <VsPage/>},
      { path: "/", element: <VsPage/>},
      { path: "/alluser", element: <UsersPage/>},
    ]
  );
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
