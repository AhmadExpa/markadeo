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

// Full-height placeholder shown while a route chunk loads, so the footer
// never jumps up under the header during navigation.
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <span className="w-10 h-10 rounded-full border-4 border-zinc-200 border-t-brand-yellow animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <Suspense fallback={<PageFallback />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/web-app-design"
            element={
              <Suspense fallback={<PageFallback />}>
                <WebAppDesign />
              </Suspense>
            }
          />
          <Route
            path="/work"
            element={
              <Suspense fallback={<PageFallback />}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageFallback />}>
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
