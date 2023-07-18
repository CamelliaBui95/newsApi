import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStoreState, useStoreActions } from "easy-peasy";
import ContentCard from "../../components/contentCard";
import Loading from "../../components/common/loading";
import Favorite from "../../components/favorite";
import Layout from "../../components/layout";

const Content = () => {
  const router = useRouter();
  const [articleId, setArticleId] = useState(0.5);
  const [isLoading, setLoading] = useState(true);
  const article = useStoreState(state => state.articleById(articleId));
  const likedArticles = useStoreState(state => state.likedArticles);
  const { handleLike } = useStoreActions(actions => actions);

  const handleUrlChange = () => {
    window.location = article.url;
  };

  useEffect(() => {
    const articleId = router.query.articleId
      ? router.query.articleId
      : window.location.pathname.match(/\d+/)[0];
    setArticleId(articleId);
    setLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  const navItems = [
          { 
            key: "home-1",
            path: "/",
            content: "Home",
          },
        ]

  return (
    <Layout navItems={navItems} containerStyle="-fluid">
      {likedArticles.length > 0 && <div className="col-3">
            <Favorite onUpdate={() => setArticleId(articleId)} />
          </div>}
          <div className="col">
            <div className="container content-card">
              <ContentCard
                author={article.author}
                publishDate={new Date(article.publishedAt).toLocaleDateString("fr")}
                urlToImage={article.urlToImage}
                content={article.content}
                onUrlChange={handleUrlChange}
                onLike={() => handleLike({article, id: articleId})}
                liked={article.liked}
                title={article.title}
              />
            </div>
          </div>
    </Layout>
  );
};

export default Content;
