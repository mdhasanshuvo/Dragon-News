import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-base-200 p-2 gap-2">
            <h2 className="text-white bg-[#D72050] px-5 py-2">Latest</h2>
            <Marquee speed={50} pauseOnHover={true} className="space-x-8 text-lg">
                <Link to="/">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Link>
                <Link to="/">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Link>
                <Link to="/">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;