import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <>
          <div className="flex px-10">
            <img
              className="w-10 h-10 rounded"
              src="https://avatars.githubusercontent.com/u/86979607?s=96&v=4"
              alt="user"
            />
            <div className="px-2 my-3">
              <p>{comment.username}</p>
              <p>{comment.comments}</p>
            </div>
          </div>
          <div className="px-8">{comment.replies && <CommentBox data={comment.replies} />}</div>
        </>
      ))}
    </div>
  );
};

export default CommentBox;
