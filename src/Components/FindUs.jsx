import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-2'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 *:justify-start">
                <button className="btn join-item">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn join-item">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="btn join-item">
                    <FaInstagram></FaInstagram>
                    Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUs;