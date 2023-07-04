import { DocumentReportIcon } from "@heroicons/react/solid";
import logo from "../assets/images/logo.png";

export default function Navbar() {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                    href="/home"
                >
                    <img className="w-20" src={logo} alt="Monefy" />
                </a>
                <a
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
                    type="button"
                    href="/reports"
                >
                    <DocumentReportIcon className="h-5 w-5 text-white-500" />
                </a>
            </div>
        </nav>
    );
}
