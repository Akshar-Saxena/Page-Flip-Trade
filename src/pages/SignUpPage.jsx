import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 } from "uuid";
import { db } from "../constants/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signHandler = async () => {
        setLoading(true);
        let token = v4();
        await addDoc(collection(db, "users"), {
            id: token,
            username: username,
            email: email,
            password: pass,
        });
        setLoading(false);
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        document.cookie = `token="${token}"`;
        navigate("/");
    };

    const validate = () => {
        if (pass == "" || username == "" || email == "") {
            toast.error("Fill each fields");
            return null;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email");
            return null;
        }
        signHandler();
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="flex h-screen w-full justify-between">
                    <Toaster />
                    <div className="flex flex-col w-[40%] px-8 justify-evenly items-center">
                        <h1 className="text-5xl text-center font-bold">
                            Turn the Page, <br />{" "}
                            <span className="text-[#FB635D]">Trade</span> the{" "}
                            <br /> Adventure!
                        </h1>
                        <img className="w-[250px]" src="/book.png" alt="" />
                    </div>
                    <div className="bg-[#C5DCFC] flex flex-col justify-center items-center w-[60%] shadow-lg shadow-[#FB635D] rounded-l-[80px]">
                        <h1 className="text-5xl font-bold mb-8">Sign Up</h1>
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
                                type="text"
                                placeholder="Create Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className="px-6 py-4 my-8 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-[#FB635D]"
                                type="password"
                                placeholder="Create Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={validate}
                            className="py-4 mt-14 rounded-full px-10 text-white bg-[#FB635D]"
                        >
                            Sign Up
                        </button>
                        <h1 className="font-semibold mt-9">
                            Already have an Account?{" "}
                            <a className="text-[#FB635D]" href="/login">
                                Login
                            </a>
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
}
