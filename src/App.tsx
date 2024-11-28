import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ComingSoon } from './components/ComingSoon';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<ComingSoon />} 
        />
        <Route 
          path="/hidden" 
          element={<MainLayout />} 
        />
        {/* Catch all other routes and redirect to home */}
        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;