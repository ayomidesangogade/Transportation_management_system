import { Menu, X, Bell, Settings, User } from "lucide-react";

function Header(props) {
    return (
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-3 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hamburger (mobile) */}
            <button
              className="p-2 rounded-lg bg-gray-100 text-gray-700 md:hidden"
              onClick={props.setSidebarOpen}
            >
              {props.state ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-base font-semibold text-gray-700 hidden md:block">
              {props.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-gray-700">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User size={20} />
            </button>
          </div>
        </header>
    )
}

export default Header