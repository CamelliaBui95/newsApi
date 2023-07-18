import { useStoreState, useStoreActions } from "easy-peasy";
import FavoriteCard from "./favoriteCard";
import SideBar from "./common/sideBar";

const Favorite = ({onUpdate}) => {
  const likedArticles = useStoreState(state => state.likedArticles); 
  const {dislikeArticle} = useStoreActions(actions => actions);

  const items = likedArticles.map(article => { 
    return {
      id: article.articleId,
      payload: (
        <FavoriteCard
          article={article}
          onClick={() => dislikeArticle(article.articleId)}
          onUpdate={onUpdate}
        />
      ),
    };
  })

  if (items.length === 0)
    return null;

  return (
    <SideBar label={{label: "Favorites", path: "/favorite"}} items={items}/>    
  );
}
 
export default Favorite;