import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UserDropdown from './components/UserDropdown';
import { AuthProvider } from './contexts/AuthContext';
import { Menu } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <div className="flex h-screen bg-gray-100">
                  <button
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <Menu className="w-6 h-6" />
                  </button>

                  <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

                  <main
                    className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 transition-all duration-300 ${
                      sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
                    }`}
                  >
                    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3">
                      <div className="flex justify-end">
                        <UserDropdown />
                      </div>
                    </div>

                    <div className="container mx-auto px-6 py-8">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </div>
                  </main>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;