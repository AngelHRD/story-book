import { Link } from "@tanstack/react-router";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <aside className="flex flex-col w-64 bg-slate-900  text-white py-4">
                <div className="flex justify-center pt-2">
                    <img src="/assets/img/logo.webp " alt="Looney Toons" className="w-35 h-35" />
                </div>
                <nav className="mt-4 flex-grow">
                    <ul className="">
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 hover:bg-slate-600 hover:text-white hover:cursor-pointer"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contacts"
                                className="block px-4 py-2 hover:bg-slate-600 hover:text-white hover:cursor-pointer"
                            >
                                Contacts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className="block px-4 py-2 hover:bg-slate-600 hover:text-white hover:cursor-pointer"
                            >
                                Paramètres
                            </Link>
                        </li>{" "}
                        <li>
                            <Link
                                to="/about"
                                className="block px-4 py-2 hover:bg-slate-600 hover:text-white hover:cursor-pointer"
                            >
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center">
                    <button type="button" className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                            />
                        </svg>
                    </button>
                </div>
            </aside>
            <main className="flex-1 bg-slate-50 text-slate-900">{children}</main>
        </div>
    );
};
