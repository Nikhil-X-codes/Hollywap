import { NavLink } from 'react-router-dom';
import ToggleSwitch from './toggle';
import { useTheme } from '../contexts/toggle';

function Nav() {
  const { theme } = useTheme();

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} tracking-tight`}>
              Hollywap
            </h1>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? `${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'} font-semibold` 
                    : `${theme === 'dark' ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/fav"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? `${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'} font-semibold` 
                    : `${theme === 'dark' ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                }`
              }
            >
              Favorites
            </NavLink>
            
            <div className="ml-2 sm:ml-4 flex items-center">
              <ToggleSwitch />
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Nav;