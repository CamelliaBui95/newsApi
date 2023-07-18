import Link from "next/link";
import Button from "./common/button";

const FavoriteCard = ({ article, onClick, onUpdate }) => {
  const { articleId } = article;
  return (
    <div className="card favorite-card" key={articleId}>
      <Link
        href={{
          pathname: "/article/[articleId]",
          query: { articleId },
        }}
        className="link"
      >
        <div className="card-body" onClick={() => onUpdate(articleId)}>
          {article.title}
        </div>
      </Link>
      <div className="card-body">
        <Button
          onClick={onClick}
          label="Delete"
          styleAttributes={{ buttonStyle: "btn-outline-secondary" }}
          
        />
      </div>
    </div>
  );
};

export default FavoriteCard;
