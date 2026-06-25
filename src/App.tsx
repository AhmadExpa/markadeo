/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './searchsolver/Layout';
import Home from './searchsolver/pages/Home';

// Code-split the secondary routes so the initial bundle only ships the
// landing page; each page is fetched on demand when navigated to.
const ServicesPage = lazy(() => import('./searchsolver/pages/ServicesPage'));
const WebAppDesign = lazy(() => import('./searchsolver/pages/WebAppDesign'));
const Work = lazy(() => import('./searchsolver/pages/Work'));
const About = lazy(() => import('./searchsolver/pages/About'));
const Contact = lazy(() => import('./searchsolver/pages/Contact'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <Suspense fallback={null}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/web-app-design"
            element={
              <Suspense fallback={null}>
                <WebAppDesign />
              </Suspense>
            }
          />
          <Route
            path="/work"
            element={
              <Suspense fallback={null}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={null}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={null}>
                <Contact />
              </Suspense>
            }
          />
          {/* Fallback to home for any unknown route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
