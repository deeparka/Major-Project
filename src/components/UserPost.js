import image from "../img/image.jpg";
import { BsDot, BsThreeDots } from "react-icons/bs";

const UserPost = () => {
    return (
        <center>
            <div className="border-2 w-100">
                <div>
                    <div className="flex">
                        <div>
                            <img
                                src={image}
                                alt="dp"
                                className="rounded-full h-11 w-11"
                            />
                        </div>
                        <div className="flex">
                            <div>Name</div>
                            <div>@username</div>
                            <div>
                                <BsDot />
                            </div>
                            <div>2h</div>
                            <div>
                                <button type="button">
                                    <BsThreeDots />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur reprehenderit in autem facere architecto aliquam
                        dolorem, optio incidunt voluptates quasi deleniti
                        quisquam dignissimos quia impedit velit! Saepe nam nobis
                        veritatis!
                    </div>
                    <div></div>
                </div>
            </div>
        </center>
    );
};

export default UserPost;
