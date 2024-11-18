import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col my-5 gap-4 justify-center items-center">
            <div className="logo">
                <img className="" src={logo} alt="" />
            </div>
            <p className="text-gray-400 text-xl">Journalism Without Fear or Favour</p>
            <p className="text-[22px] text-gray-600">
                {moment().format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
};

export default Header;