import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {

    const { data: news } = useLoaderData();

    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Dragon News Home</h2>
            <h2 className="mb-4">{news.length} news found</h2>
            {
                news.map(singleNews => (
                    <NewsCard
                        key={singleNews._id}
                        singleNews={singleNews}></NewsCard>
                ))
            }
        </div>
    );
};

export default CategoryNews;