import {
  useStoreState,
  useStoreRehydrated,
  useStoreActions,
} from "easy-peasy";
import ArticleCard from "../components/articleCard";
import Loading from "../components/common/loading";
import Layout from "../components/layout";
import Button from "../components/common/button";
import { useEffect, useState } from "react";

const FavoritePage = () => {
  const likedArticles = useStoreState((state) => state.likedArticles);
  const { handleLike, deleteAllLikedArticles } = useStoreActions((actions) => actions);
  const [count, setCount] = useState(0);
  const isRehydrated = useStoreRehydrated();

  useEffect(() => {
      setCount(likedArticles.length);
  }, [likedArticles])

  if (!isRehydrated) return <Loading />;

  const navItems = [
    {
      key: "home-1",
      path: "/",
      content: "Home",
    },
  ];

  if(count === 0) {
    return (
      <Layout navItems={navItems} containerStyle="">
        <div className="col">
          <div className="no-favorite">
            <p>You have no favorite.</p>
          </div>
        </div>
      </Layout>
    );
  }


  return (
    <Layout navItems={navItems} containerStyle="">
      <div className="col">
        <div className="favorite">
          <div className="header">
            <h1 className="text-primary">
              Favorites <span className="badge badge-primary">{ count }</span>
            </h1>
            <Button
              onClick={deleteAllLikedArticles}
              label="Delete All"
              styleAttributes={{ buttonStyle: "btn-danger btn-lg" }}
              disabled={count === 0}
            />
          </div>
          <div className="list-group">
            {likedArticles.map((article) => (
              <ArticleCard
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
                author={article.author}
                source={article.source.name}
                publishDate={new Date(article.publishedAt).toLocaleDateString(
                  "fr"
                )}
                articleId={article.articleId}
                onLike={() => handleLike({ article, id: article.articleId })}
                liked={article.liked}
                articleRef={null}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FavoritePage;
