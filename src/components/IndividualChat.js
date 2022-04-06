import image from "../img/image.jpg";

const IndividualChat = () => {
    return (
        <div className="w-3/4 border-2">
            <nav>
                <div className="flex justify-start border-b-2 p-1">
                    <div className="pl-11 pt-2">
                        <img
                            src={image}
                            alt=""
                            className="rounded-full h-9 w-9"
                        />
                    </div>
                    <div className="flex-col pl-3">
                        <div className="font-bold text-lg">username</div>
                        <div className="font-thin text-sm">Active 2m ago</div>
                    </div>
                    <div className="pl-130 pt-3">
                        <button type="button">
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
            <div className="h-screen w-auto"></div>
            <div className="">
                <footer className="px-4 py-4">
                    <button
                        disabled="disabled"
                        className="rounded-3xl border-2"
                    >
                        <div className="flex justify-start py-2 px-4 space-x-3">
                            <div>
                                <button type="button" className="">
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
                                <button type="button" className="">
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
                                <button type="button" className="">
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
    );
};

export default IndividualChat;
