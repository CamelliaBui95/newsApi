import React from "react";
import Toggle from "./common/toggle";
import Like from "./common/like";
import Link from "next/link";

function ArticleCard({
  articleId,
  urlToImage,
  publishDate,
  title,
  author,
  source,
  description,
  articleRef,
  onLike,
  liked
}) {

  return (
    <div
      className="container article-card"
      ref={articleRef}
      key={"arCard-" + articleId}
    >
      <div className="row">
        <div className="col-3">
          {urlToImage ? (
            <img src={urlToImage} alt="thumbnail" className="thumbnail-img" />
          ) : (
            <div className="empty-block"></div>
          )}
        </div>
        <div className="col">
          <h5 className="title">{title}</h5>
          <p className="source">{source}</p>
          <Toggle
            defaultLabel="Show more"
            switchLabel="Hide"
            dataType="collapse"
            dataTarget={"ar-" + articleId}
          />
          <Like liked={liked} onLike={onLike} />
        </div>
      </div>

      <div className="collapse" id={"ar-" + articleId}>
        <div className="card card-body">
          <p className="description">
            {description}
            <span className="show-content">
              <Link
                href={{
                  pathname: "/article/[articleId]",
                  query: { articleId },
                }}
                style={{
                  color: "whitesmoke",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
              >
                Show Content
              </Link>
            </span>
          </p>

          <div className="row">
            <div className="col">
              <p className="author float-left">{author}</p>
            </div>
            <div className="col">
              <p className="publish-date float-right">
                {"Published on " + publishDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
