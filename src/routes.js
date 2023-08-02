import { Navigate, useRoutes } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/message/Profile'
import Security from './pages/message/Security'
import User from './pages/User'
import Settings from './pages/Settings'
import Home from './pages/Home'
import NestedNavLayout from './layouts/nestedLayout/NestedNavLayout'
import RootLayout from './layouts/rootLayout/RootLayout'

export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<RootLayout />}>
    <Route path="/" element={<NestedNavLayout/>}>
      <Route index element={<Home />} />
      </Route>
      <Route path="message" element={<NestedNavLayout/>}>
        <Route path="profile" element={<Profile />} />
        <Route path="security" element={<Security/>} />
      </Route>
      <Route path="user" element={<NestedNavLayout/>}>
      <Route path="user" element={<User />} />
      </Route>
      <Route path="settings" element={<NestedNavLayout/>}>
      <Route path="settings" element={<Settings />} />
      </Route>
    </Route>
    </Routes>
  )
}
