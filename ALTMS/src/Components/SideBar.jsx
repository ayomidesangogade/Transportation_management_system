import {
  LogOut,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import UILogo from "../images/university-of-ibadan-logo-transparent.png"

function SideBar(props) {
   
    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-20 w-64 bg-emerald-600 shadow-lg transform transition-transform md:translate-x-0 md:static md:shadow-none ${
                    props.state ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ position: "fixed", height: "100vh", overflowY: "auto" }}
            >
                <div className="h-16 flex items-center px-6 border-b border-emerald-700 justify-between">
                    <div className="flex items-center gap-2">
                        <img src={UILogo} alt="UI crest" className="h-10 w-15" />
                        <span className="font-extrabold text-lg text-white">ALTMS</span>
                    </div>
                    {/* Close button */}
                    <button
                        className="text-white text-xl px-2 py-1 rounded hover:bg-emerald-700 md:hidden"
                        aria-label="Close sidebar"
                        onClick={props.onClose}
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="p-4 space-y-2 flex flex-col h-[calc(100vh-4rem)]">
                    <div>
                        {props.navItems.map(({ label, icon: Icon, active, to }) => (
                            // <a
                            //     href="#"
                            //     key={label}
                            //     className={`flex items-center gap-3 text-white py-2 px-3 rounded-lg ${active ? "bg-white/10" : "hover:bg-white/5"} hover:bg-emerald-700`}
                            //     // className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${active ? "bg-white/10" : "hover:bg-white/5"}`}
                            // >
                            //     <Icon size={18} color="white" />
                            //     {label}
                            // </a>
                            <Link
                                to={to || "#"}
                                key={label}
                                className={`flex items-center gap-3 text-white py-2 px-3 rounded-lg ${active ? "bg-white/10" : "hover:bg-white/5"} hover:bg-emerald-700`}
                            >
                                <Icon size={18} color="white" />
                                {label}
                            </Link>
                        ))}
                    </div>
                    <Link
                        to={"/"}
                        // onClick={props.onLogout}
                        className="flex items-center gap-3 text-white py-2 px-3 rounded-lg hover:bg-emerald-700 mt-auto"
                        aria-label="Logout"
                    >
                        <LogOut size={18} color="white" />
                        Logout
                    </Link>    
                </nav>
            </aside>
        </>
    )
}

export default SideBar