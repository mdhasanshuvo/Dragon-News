import FindUs from "../FindUs";
import LoginWith from "../LoginWith";

const RightNav = () => {
    return (
        <div className="space-y-6">
            <LoginWith></LoginWith>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;