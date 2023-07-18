const Loading = ({label}) => {
    return (
      <div className="loading-card text-primary">
        <h3>{label ? label : "Loading"}</h3>
        <div className="spinner-group">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
 
export default Loading;