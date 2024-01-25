import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import verifyToken from "../constants/verifyToken";
import Loader from "../components/Loader";
export default function HomePage() {
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(true);
    const check = async () => {
        let flag = await verifyToken(document.cookie.slice(6));
        setVerified(flag);
        setLoading(false);
        // console.log(flag);
    };
    useEffect(() => {
        check();
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <NavBar set={verified} />
                    <div className="w-[90%] max-[820px]:flex-col-reverse flex justify-between items-center m-auto">
                        <div className="w-[50%] max-[820px]:w-[70%] mt-10">
                            <h1 className="text-6xl max-[500px]:text-4xl font-semibold">
                                Buy and sell your textbooks for the best{" "}
                                <span className="text-[#FB635D]">price.</span>
                            </h1>
                            <p className="text-gray-600 font-semibold my-5">
                                Discover the best prices for buying and selling
                                textbooks in our marketplace, Buy and sell with
                                confidence today!
                            </p>
                            {/* <button className="py-3 rounded-full px-4 bg-[#FB635D] flex justify-evenly items-center">
                                <img
                                    className="w-[20px] mr-2"
                                    src="/search.png"
                                    alt=""
                                />
                                <h1 className="text-white">Search Book</h1>
                            </button> */}
                        </div>
                        <img
                            className="w-[40%] max-[820px]:w-[60%] max-[500px]:w-[90%] max-[500px]:mt-16"
                            src="/hero.png"
                            alt=""
                        />
                    </div>
                    <div
                        id="about"
                        className="flex justify-center items-center flex-col pb-10 bg-[#EBF3FF] p-4 mt-10"
                    >
                        <h1 className="text-5xl font-semibold text-[#FB635D] mb-6">
                            About
                        </h1>
                        <p className="w-[70%] text-justify text-lg">
                            Welcome to PageFlipTrade – the ultimate destination
                            for book lovers, where every page holds a new
                            adventure!
                        </p>
                        <p className="w-[70%] text-justify text-lg">
                            At PageFlipTrade, we believe in the magic of books
                            and the endless possibilities they offer. Whether
                            you're a seasoned bibliophile or just embarking on
                            your literary journey, our platform is designed to
                            cater to all your book-related needs.
                        </p>
                        <div className="w-[70%] flex flex-col">
                            <h1 className="text-xl font-bold mt-6">
                                Buying and Selling Books
                            </h1>
                            <p className=" text-justify text-lg">
                                Looking to expand your library? Or perhaps it's
                                time to declutter and share your cherished reads
                                with fellow enthusiasts? PageFlipTrade provides
                                a seamless marketplace where users can buy and
                                sell their books with ease. From rare
                                collectibles to bestsellers, our diverse
                                selection ensures there's something for every
                                reader.
                            </p>
                        </div>
                        <div className="w-[70%] flex flex-col">
                            <h1 className="text-xl font-bold mt-6">
                                Community of Book Lovers
                            </h1>
                            <p className=" text-justify text-lg">
                                At PageFlipTrade, we understand the power of
                                community. Join our vibrant network of book
                                lovers, where you can connect with fellow
                                readers, share book recommendations, and engage
                                in meaningful discussions about your favorite
                                titles. Whether you're seeking a book club or
                                simply craving literary camaraderie, you'll find
                                it here.
                            </p>
                        </div>
                        <div className="w-[70%] flex flex-col">
                            <h1 className="text-xl font-bold mt-6">
                                Our Mission
                            </h1>
                            <p className=" text-justify text-lg">
                                Our mission is simple: to foster a love for
                                reading and connect book enthusiasts worldwide.
                                Whether you're buying, selling, or simply
                                exploring the world of literature, PageFlipTrade
                                is your trusted companion on your literary
                                journey.
                            </p>
                            <p className=" text-justify text-lg">
                                So why wait? Dive into the world of books with
                                PageFlipTrade and let the adventure begin!
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
}
