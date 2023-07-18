import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions, useStoreRehydrated } from "easy-peasy";
import Loading from "../components/common/loading";
import Article from "../components/article";
import ScrollRestoration from "../components/common/scrollRestoration";
import Favorite from "../components/favorite";
import SearchBox from "../components/common/searchBox";
import Layout from "../components/layout";

const HomePage = () => {
  const [loadMore, setLoadMore] = useState(false);
  const isRehydrated = useStoreRehydrated();
  const { articles, currentPage, prevDate, searchQuery } = useStoreState(state => state);
  const likedArticles = useStoreState(state => state.likedArticles);
  const filteredArticles = useStoreState(state => state.articlesBySearchQuery(["title", "source.name", "author"]));
  const { getNewArticles, setCurrentPage, updatePrevDate, removeArticles, setSearchQuery } = useStoreActions(actions => actions);

  const handleOnChange = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const currentDate = new Date().getDate();
    let cancel;
    if (currentDate !== prevDate) {
      removeArticles();
      cancel = getNewArticles();
      updatePrevDate(currentDate);
    }
  
    return () => {
      if (cancel)
        return cancel();
    };
  }, []);

  useEffect(() => {
    if (loadMore && searchQuery === "") {
      setCurrentPage(currentPage + 1);
      getNewArticles();
      setLoadMore(false);
    }

  }, [loadMore]);

  if (!isRehydrated || articles.length === 0) return <Loading />;
  else {
    const allArticles = searchQuery ? filteredArticles : articles;
    const navItems = [
            {
              content: (
                <SearchBox value={searchQuery} onChange={handleOnChange} />
              ),
              key: "searchBox"
            },
          ]
    return (
      <Layout navItems={navItems} containterStyle="-fluid">
            {likedArticles.length > 0 && <div className="col-3">
              <Favorite onUpdate={() =>{}}/>
            </div>}
            <div className="col">
              <div className="list-group">
                {allArticles.map(article => {
                  const index = articles.indexOf(article);
                  return (
                    <Article
                      article={article}
                      articleId={index}
                      key={"ar-" + index}
                      isLast={index === articles.length - 1}
                      loadMore={() => setLoadMore(true)}
                    />
                  );
                })}
              </div>
            </div>
        <ScrollRestoration clear={ prevDate != new Date().getDate() || articles.length === 0} />
      </Layout>
    );
  }
};

export default HomePage;
