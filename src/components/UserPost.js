import image from "../img/image.jpg";
import {
    BsDot,
    BsThreeDots,
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { MdInsertComment } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";

const UserPost = () => {
    return (
        <center>
            <div className="border-2 w-100 my-32 p-4">
                <div>
                    <div className="flex">
                        <div>
                            <img
                                src={image}
                                alt="dp"
                                className="rounded-full h-11 w-11 mt-1"
                            />
                        </div>
                        <div className="">
                            <div className="flex pt-0.5 pl-2">
                                <div className="pr-2 font-bold">Name</div>
                                <div className="font-light">@username</div>
                                <div className="pt-1">
                                    <BsDot />
                                </div>
                                <div>2h</div>
                                <div className="pl-100">
                                    <button type="button">
                                        <BsThreeDots />
                                    </button>
                                </div>
                            </div>
                            <div className="flex pl-2 mb-2 text-sm">
                                <div>FrontEnd Developer @Zomato|| C++</div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-13 text-left mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur reprehenderit in autem facere architecto aliquam
                        dolorem, optio incidunt voluptates quasi deleniti
                        quisquam dignissimos quia impedit velit! Saepe nam nobis
                        veritatis!
                    </div>
                    <div>
                        <div className="w-auto h-40 border-2 ml-13">
                            Post Description (Pic or Videos or Shared posts)
                        </div>
                    </div>
                    <div className="mt-4 ml-13">
                        <div className="flex justify-start">
                            <div className="flex">
                                <button type="button">
                                    <BsFillArrowUpCircleFill className="h-6 w-6" />
                                </button>
                                <div className="pl-2">3</div>
                            </div>
                            <div className="flex pl-5">
                                <button type="button">
                                    <BsFillArrowDownCircleFill className="h-6 w-6" />
                                </button>
                                <div className="pl-2">3</div>
                            </div>
                            <div className="flex pl-5">
                                <button type="button">
                                    <MdInsertComment className="h-6 w-6" />
                                </button>
                                <div className="pl-2">0</div>
                            </div>
                            <div className="flex pl-5">
                                <button type="button">
                                    <IoMdShareAlt className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
};

export default UserPost;
