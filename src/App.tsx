import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import LoginPage from './Pages/Login/Login';
import RegisterPage from './Pages/Register/Register';
import ProfilePage from './Pages/Profile/Profile';
import ToptenPage from './Pages/Topten/Topten';
import VsPage from './Pages/Vs/VS';

function App() {

  const routers = createBrowserRouter(
    [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage/>},
      { path: "/profile", element: <ProfilePage/>},
      { path: "/top-10", element: <ToptenPage/>},
      { path: "/vs", element: <VsPage/>},
      { path: "/", element: <VsPage/>},
    ]
  );
  return (
    <>

    <RouterProvider router={routers} />
    {/* <Router>
      <AppBar/>
      <Routes>
          <Route path="/" element={<VsPage />} />
          <Route path="/vs" element={<VsPage />} />
          <Route path="/top10" element={<ToptenPage />} />
          <Route path="/me" element={<ProfilePage />} />
      </Routes>
    </Router> */}

    </>
  )
}

export default App
