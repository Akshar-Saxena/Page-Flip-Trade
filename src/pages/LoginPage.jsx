import React, { useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../constants/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async () => {
        setLoading(true);
        let flag = false;
        const users = await getDocs(collection(db, "users"));
        users.forEach((element) => {
            if (
                element.data().email == email &&
                element.data().password == pass
            ) {
                flag = true;
                document.cookie =
                    "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                document.cookie = `token=${element.data().id}`;
            }
        });
        setLoading(false);
        if (flag) {
            toast.success("Login successful");
            navigate("/");
        } else {
            toast.error("Invalid Email or Password");
        }
    };

    const validate = () => {
        if (email == "" || pass == "") {
            toast.error("Fill each field");
            return null;
        }
        loginHandler();
    };

    return (
        <div>
            <Toaster />
            {loading ? (
                <Loader />
            ) : (
                <div className="flex h-screen w-full justify-between">
                    <div className="flex flex-col w-[40%] px-8 justify-evenly items-center">
                        <h1 className="text-5xl text-center font-bold">
                            Turn the Page, <br />{" "}
                            <span className="text-[#FB635D]">Trade</span> the{" "}
                            <br /> Adventure!
                        </h1>
                        <img className="w-[250px]" src="/book.png" alt="" />
                    </div>
                    <div className="bg-[#C5DCFC] flex flex-col justify-center items-center w-[60%] shadow-lg shadow-[#FB635D] rounded-l-[80px]">
                        <h1 className="text-5xl font-bold mb-8">Login</h1>
                        <div className="w-[60%]">
                            <input
                                className="px-6 py-4 my-8 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-[#FB635D]"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="px-6 py-4 my-8 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-[#FB635D]"
                                type="password"
                                placeholder="Enter Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={validate}
                            className="py-4 mt-14 rounded-full px-10 text-white bg-[#FB635D]"
                        >
                            Login
                        </button>
                        <h1 className="font-semibold mt-9">
                            Don't have an Account?{" "}
                            <a className="text-[#FB635D]" href="/signup">
                                Sign Up
                            </a>
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
}
