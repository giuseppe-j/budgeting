import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./shared/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";

export default function Login() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/home");
    }, [user, loading, navigate]);
    return (
        <div className="h-screen bg-sky-100 overflow-auto">
            <div className="bg-gradient-to-t from-sky-500 to-cyan-400">
                <Navbar />
                <div
                    id="small-modal"
                    tabIndex={-1}
                    className="flex absolute justify-center items-center bg-slate-500/50 overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal md:h-full"
                >
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-md font-medium text-gray-900 dark:text-white">
                                    Login
                                </h3>
                            </div>
                            <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button
                                    onClick={signInWithGoogle}
                                    className="flex items-center px-4 py-2 font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline w-5 h-5 mr-3 text-gray-900 fill-current"
                                        viewBox="0 0 48 48"
                                        width="24px"
                                        height="24px"
                                    >
                                        <path
                                            fill="#fbc02d"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#e53935"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4caf50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1565c0"
                                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                    </svg>
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
