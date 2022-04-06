import { RiSendPlaneFill } from "react-icons/ri";
import { BiEdit, BiChevronDown } from "react-icons/bi";
import image from "../img/image.jpg";
import { useState } from "react";

const ChatDetails = () => {
    let [activeChat, setActiveChat] = useState(false);

    const checkUsers = () => {
        setActiveChat(true);
    };

    return (
        <div className="flex p-4 max-h-screen">
            {!activeChat && (
                <div className="w-3/4 border-2 text-center p-60">
                    <button type="button" onClick={() => {}}>
                        <RiSendPlaneFill className="m-auto h-16 w-32" />
                    </button>
                    <div className="text-3xl font-thin py-2">Your Messages</div>
                    <div className="font-thin pb-4">
                        Send private photos and messages to friend or group
                    </div>
                    <button
                        disabled="disabled"
                        className="bg-blue-600 text-white px-2 py-1 rounded-md"
                    >
                        Send message
                    </button>
                </div>
            )}
            {activeChat && (
                <div className="w-3/4 border-2">
                    <nav>
                        <div className="flex justify-start border-b-2 p-1.5">
                            <div className="pl-6 pt-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="rounded-full h-9 w-9"
                                />
                            </div>
                            <div className="flex-col pl-3">
                                <div className="font-bold text-lg">
                                    username
                                </div>
                                <div className="font-thin text-sm">
                                    Active 2m ago
                                </div>
                            </div>
                            <div className="pl-130 pt-3">
                                <button type="button" onClick={() => {}}>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="h-3/4 w-auto"></div>
                    <div className="">
                        <footer className="px-2 py-4">
                            <button
                                disabled="disabled"
                                className="rounded-3xl border-2"
                            >
                                <div className="flex justify-start py-2 px-4 space-x-3">
                                    <div>
                                        <button
                                            type="button"
                                            className=""
                                            onClick={() => {}}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <input
                                            type="textarea"
                                            placeholder="Send a message..."
                                            name="message"
                                            id="message"
                                            className="w-100 focus:outline-none "
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => {}}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => {}}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </button>
                        </footer>
                    </div>
                </div>
            )}
            <div className="w-1/4 border-t-2 border-b-2 border-r-2">
                <div className="border-b-2 flex justify-between">
                    <div className="flex justify-around p-4 ml-32">
                        <div>username</div>
                        <BiChevronDown className="mt-1" />
                    </div>
                    <div className="p-4 mt-1 mr-1">
                        <BiEdit className="h-6 w-6" />
                    </div>
                </div>
                <div className="max-h-128 overflow-y-scroll">
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User One</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Two</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Three</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Four</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Five</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Six</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Seven</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Eight</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Nine</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Ten</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Eleven</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Twelve</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Thirteen</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Fourteen</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Fifteen</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex hover:bg-slate-50 hover:cursor-default"
                        onClick={checkUsers}
                    >
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-14 w-14 ml-4 mt-4 mb-2"
                        />
                        <div className="flex-col ml-6 mt-4">
                            <div className="">User Sixteen</div>
                            <div className="font-light text-gray-400">
                                Active 2m ago
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ChatDetails;
