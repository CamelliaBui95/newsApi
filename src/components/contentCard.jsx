'use client';
import React from 'react';
import Like from "./common/like";
import { styleButton as style } from '../styles/inlineStyle';

const styleButton = { ...style };
styleButton.width = "";

const ContentCard = ({author, publishDate, urlToImage, content, title, onUrlChange, liked, onLike }) => {

    return (
      <>
        <div className="row">
          <div className="col">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">{author && <p>{author}</p>}</div>
          <div className="col">
            <p className="float-right">{"Published on " + publishDate}</p>
          </div>
        </div>

        {urlToImage && (
          <div className="row">
            <div className="col">
              <img
                src={urlToImage}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <p>{content} </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn btn-outline-primary float-left"
              onClick={onUrlChange}
              style={styleButton}
            >
              Go to full article
            </button>
          </div>

          <div className="col" style={{textAlign: "right"}}>
            <Like liked={liked} onLike={onLike}/>
          </div>
        </div>
      </>
    );
}
 
export default ContentCard;