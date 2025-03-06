import { AiOutlineContainer } from "react-icons/ai";
import { formatDistance } from "date-fns";
import LazyImage from "../lazy-image";
import config from "../../../gitprofile.config"; // Import config

const BlogCard = ({ loading }: { loading: boolean }) => {
  const articles = config.blog.hardcodedArticles || [];

  const renderArticles = () => {
    return articles.length ? (
      articles.map((article, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.thumbnail}
                    alt="thumbnail"
                    placeholder={<div className="w-full h-full bg-gray-200"></div>}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-medium text-base-content opacity-60">
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {formatDistance(new Date(article.publishedAt), new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">No recent posts</p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className={`card compact bg-base-200 ${loading ? "shadow bg-opacity-40" : "shadow-lg"}`}>
            <div className="card-body">
              <div className="mx-3 mb-2">
                <h5 className="card-title">
                  <span className="text-base-content opacity-70">Latest Blog Posts</span>
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">{loading ? <p>Loading...</p> : renderArticles()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
