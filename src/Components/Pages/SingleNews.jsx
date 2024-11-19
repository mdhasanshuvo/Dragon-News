import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightNav from "../LayoutComponents/RightNav";

const SingleNews = () => {

    const { data } = useLoaderData();

    const news = data[0];
    console.log(news);

    return (
        <div>
            <Header></Header>
            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
                <div className="col-span-9 my-6">
                    <h2 className="text-lg font-semibold">Dragon News</h2>

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link
                                    to={`/category/${news?.category_id}`}
                                    className="btn btn-primary bg-[#D72050] text-white">
                                    All news in this category
                                </Link >
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-3 my-6">
                    <RightNav></RightNav>
                </div>
            </main>
        </div>
    );
};

export default SingleNews;