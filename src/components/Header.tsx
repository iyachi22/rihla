import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
// import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/uploads/827bcbc0-fa3f-47b7-b300-f95964d7a013.png" 
              alt="رحلة" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">رحلة</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link to="/rentals" className="text-gray-700 hover:text-primary transition-colors">
              {t('rentals')}
            </Link>
            <Link to="/add-property" className="text-gray-700 hover:text-primary transition-colors">
              {t('addProperty')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              {t('aboutUs')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              {t('contactUs')}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language switcher temporarily disabled
            <LanguageSwitcher />
            */}
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/rentals" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('rentals')}
              </Link>
              <Link 
                to="/add-property" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('addProperty')}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('aboutUs')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
