import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
    const { singleNews } = props || {};

    const {
        author = {},
        title,
        thumbnail_url,
        rating = {},
        total_view,
        details,
    } = singleNews || {};

    return (
        <div className="card bg-white shadow-md border border-gray-300 rounded-lg p-4 mb-5 space-y-3">
            {/* Author Info */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <div>
                        <p className="text-sm font-medium">{author.name}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-600 cursor-pointer" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">{title}</h2>

            {/* Image */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full max-h-96 object-cover rounded-md mb-4"
                />
            </figure>

            {/* Details */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {details?.length > 150 ? `${details.slice(0, 300)}...` : details}{" "}
                <span className="text-primary font-medium cursor-pointer">Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    {/* Stars */}
                    <div className="flex text-orange-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < Math.floor(rating?.number || 0) ? "text-orange-400" : "text-gray-300"}
                            />
                        ))}
                    </div>

                    {/* Numerical Rating */}
                    <span className="text-sm font-medium text-gray-600">
                        {rating?.number?.toFixed(1) || "0.0"}
                    </span>
                </div>


                {/* Views */}
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span className="text-sm">{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
