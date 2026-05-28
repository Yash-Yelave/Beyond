import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages (Lazy Loaded for Production Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Membership = lazy(() => import('./pages/Membership'));
const Events = lazy(() => import('./pages/Events'));
const Insights = lazy(() => import('./pages/Insights'));
const SubmitOpportunity = lazy(() => import('./pages/SubmitOpportunity'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

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
      <Route path="/dashboard" element={
        <Suspense fallback={<div className="min-h-screen bg-pearl flex items-center justify-center text-forest">Loading...</div>}>
          <Dashboard />
        </Suspense>
      } />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
