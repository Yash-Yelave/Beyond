import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Events from './pages/Events';
import Insights from './pages/Insights';
import SubmitOpportunity from './pages/SubmitOpportunity';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/submit-opportunity" element={<SubmitOpportunity />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
      {/* Dashboard stands alone (no public header/footer) */}
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
