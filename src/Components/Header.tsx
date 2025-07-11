import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Upload, BarChart3, Leaf, User } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header = () => {
  const location = useLocation();
  const { user } = useUser();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Recycle className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold">Walmart Recycle</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/upload" 
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive('/upload') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Upload size={18} />
              Recycle Items
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive('/dashboard') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <BarChart3 size={18} />
              Dashboard
            </Link>
            <Link 
              to="/impact" 
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive('/impact') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Leaf size={18} />
              Impact
            </Link>
          </nav>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-600">Eco Points:</span>
              <span className="font-semibold text-green-600">{user.credits}</span>
            </div>
            <Link to="/profile" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User className="text-green-600" size={18} />
              </div>
              <span className="hidden md:inline font-medium">{user.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
