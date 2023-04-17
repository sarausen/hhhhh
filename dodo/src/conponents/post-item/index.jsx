export const PostItem = ({ data }) => {
    return (
      <div className="post-item">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    )
  }