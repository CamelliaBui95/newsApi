import { action, thunk, computed } from "easy-peasy";
import { getArticlesFromApi } from "./articlesService";

const model = {
  articles: [],
  currentPage: 1,
  prevDate: 0.5,
  searchQuery: "",

  setSearchQuery: action((state, payload) => {
    state.searchQuery = payload.toLowerCase();
  }),

  updatePrevDate: action((state, payload) => {
    state.prevDate = payload;
  }),

  setCurrentPage: action((state, payload) => {
    state.currentPage = payload;
  }),

  addArticles: action((state, payload) => {
    state.articles.push(...payload);
  }),

  removeArticles: action((state, payload) => {
    state.articles = [];
    state.currentPage = 1;
  }),

  getNewArticles: thunk((actions, payload, helpers) => {
    const { currentPage } = helpers.getState();
    const { request, cancel } = getArticlesFromApi(currentPage);
    request
      .then((res) => {
        const { articles } = res.data;
        actions.addArticles(articles);
      })
      .catch();

    return cancel;
  }),

  articleById: computed((state) => {
    return (id) => (state.articles[id] ? state.articles[id] : {});
  }),

  articlesBySearchQuery: computed((state) => {
    return (params) => {
      const filtered = state.articles.filter((article) => {
        for (let i = 0; i < params.length - 1; i++) {
          if (
            article[params[i]] &&
            article[params[i]].toLowerCase().startsWith(state.searchQuery)
          )
            return true;
        }
      });

      return filtered;
    };
  }),

  handleLike: action((state, payload) => {
    const { article, id } = payload;
    const target = state.articles[id];
    if (!target.liked) {
      const liked = { ...article, articleId: id, liked: true };
      state.articles[id] = liked;
    } else {
      state.articles[id].liked = false;
    }
  }),

  dislikeArticle: action((state, payload) => {
    const index = payload;
    state.articles[index].liked = false;
  }),

  likedArticles: computed((state) =>
    state.articles.filter((article) => article.liked)
  ),

  deleteAllLikedArticles: action((state, payload) => {
    state.articles.forEach((article) => {
      if (article.liked) article.liked = false;
    });
  }),
};

export default model;
