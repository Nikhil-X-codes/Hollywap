
import { Link, NavLink } from 'react-router-dom';
import ToggleSwitch from './toggle';
import { useTheme } from '../contexts/toggle';

function Nav() {
  const { theme } = useTheme();

  const navClasses = `bg-${theme === 'dark' ? 'gray-800' : 'white'} shadow-sm`;
  const textClasses = theme === 'dark' ? 'text-white' : 'text-gray-800';
  
  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-xl font-bold ${textClasses}`}>Hollywap</h1>
          </div>

          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-400 font-semibold' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/fav"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-400 font-semibold' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Favorites
            </NavLink>
            <div className="flex items-center ml-4">
              <ToggleSwitch />
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Nav;