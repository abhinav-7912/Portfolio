import React from 'react';
//import java from "../../public/java.png";
//import python from "../../public/python.png";
//import passop from "../../public/passop.png";
import sportsforge from "../../public/sportsforge.png";
//import nodejs from "../../public/node.png";
import textutils from "../../public/textutils.png";


function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: sportsforge,
            name: "Sports Forge",
            paragraph: "It is a Sports Talent Recognition Platform, a web-based application developed in React.js with Firebase database under the supervision of Dr. Jaiteg Singh and Dr. Amanpreet Singh.",
            link: "https://abhinav-7912.github.io/sports-forge/#/" // Add your GitHub repo link
        },
        {
            id: 2,
            logo: textutils,
            name: "TextUtils",
            paragraph: "Web-based application made in react.js in which text can be converted into lowercase, uppercase, and it tells the time that will be utilized in reading the paragraph.",
            link: "https://abhinav-7912.github.io/TextUtils/" // Add your GitHub repo link
        },
        // Add other projects similarly with their own 'link' property
    ];

    return (
        <>
            <div name="Portfolio" className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
                <div>
                    <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                    <span className="underline">Featured Projects</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                        {cardItems.map(({ id, logo, name, paragraph, link }) => (
                            <div
                                className="bg-gray-100 md:w-[380px] md:h-[480px] border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-110 duration-300 dark:bg-slate-700 dark:text-slate-100"
                                key={id}
                            >
                                <img
                                    src={logo}
                                    className="w-[350px] h-[200px] p-1 rounded-xl border-[2px]"
                                    alt={name}
                                />
                                <div className="">
                                    <div className="px-2 font-bold text-xl mb-2 my-4">{name}</div>
                                    <p className="px-2 my-2">{paragraph}</p>
                                </div>
                                <div className="px-4 py-5 justify-around space-x-8">
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded">
                                            View
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </>
    );
}

export default Portfolio;

