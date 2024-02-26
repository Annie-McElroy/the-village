import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm';
import DisplayComment from '../DisplayComment';


export default function CommentBox({ request }) {

  const [commentList, setCommentList] = useState(request.comments);
  
  useEffect(() => {
    setCommentList(request.comments); // Update comments when props change
  }, [request.comments]);
  
  const deleteComment = (id) => {
    setCommentList(prevComments => prevComments.filter(comment => comment._id !== id));
  }
  
  return (
    <div>
      <CommentForm requestId={request._id} setCommentList={setCommentList} />
      <DisplayComment comments={commentList} deleteComment={deleteComment} />
    </div>
  );

}