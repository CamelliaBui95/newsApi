import React, {useEffect, useRef} from "react";
import { useStoreActions } from "easy-peasy";
import ArticleCard from "./articleCard";

const Article = ({ article, articleId, isLast, loadMore }) => {
  const articleRef = useRef(articleId);
  const { handleLike } = useStoreActions(actions => actions);

  useEffect(() => {
    if (!articleRef.current) return;
    
    if (isLast) {
      const observer = new IntersectionObserver(([entry]) => {
        // given that each observer observes only one element at a time,
        // there'll be always just one entry in entries => instead of looping through entries, we can extract that one entry to evaluate
        if (entry.isIntersecting) {
          loadMore();
          observer.unobserve(entry.target);
        }
      })
      observer.observe(articleRef.current);
    }

  }, [isLast])

  return (
        <ArticleCard
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
          author={article.author}
          source={article.source.name}
          publishDate={new Date(article.publishedAt).toLocaleDateString('fr')}
          articleId={articleId}
          articleRef={articleRef}
          onLike={() => handleLike({article, id: articleId})}
          liked={article.liked}
        />
  );
};

export default Article;
