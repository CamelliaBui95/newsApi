const styleButton = { width: "105.56px", height: "37.6px", marginLeft: "10px" }
const styleIcon = {color: "inherit", fontSize: "18px", marginRight: "8px"}

const Like = ({ liked, onLike, styleAttributes }) => {

  const classAttr = "bi bi-heart";
    
    return (
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ ...styleButton, ...styleAttributes }}
        onClick={onLike}
      >
        <i className={liked ? classAttr + "-fill" : classAttr} style={styleIcon}></i>
        <span style={{ fontSize: "18px" }}>{liked ? "Liked" : "Like"}</span>
      </button>
    );
}
 
export default Like;