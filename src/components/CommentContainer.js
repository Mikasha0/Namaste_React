import React from "react";
import CommentBox from "./CommentBox";

const CommentContainer = () => {
  const data = [
    {
      username: "Aniket Tamrakar",
      comments:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      replies: [
        {
          username: "Anee Magar",
          comments:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
          replies: [
            {
              username: "Aniket Tamrakar",
              comments:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            },
          ],
        },
      ],
    },
    {
      username: "Aniket Tamrakar",
      comments:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        replies:[]
    },
  ];
  return (
    <div className="mt-[80px]">
      <CommentBox data = {data} />
    </div>
  );
};

export default CommentContainer;
