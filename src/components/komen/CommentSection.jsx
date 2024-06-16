"use client"
import { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState('')
    const [comment, setComment] = useState('');

const handleCommentChange = (e) => {
    setComment(e.target.value);
};
const handleUserNameChange = (e) =>{
    setUserName(e.target.value)
}

const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && userName.trim()) {
    const newComment = { userName, text: comment };
    setComments([...comments, newComment]);
    setUserName('')
    setComment('');
    }
};

return (
    <div className="max-w-2xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Comments</h2>
    <form onSubmit={handleCommentSubmit} className="mb-4">
        <label htmlFor="Name">User Name</label>
        <input
        value={userName}
        onChange={handleUserNameChange}
        className="w-full p-2 border rounded mb-2"
        placeholder="Add a user name"
        />
        <label htmlFor="comment">comment</label>
        <input
        value={comment}
        onChange={handleCommentChange}
        className="w-full p-2 border rounded mb-2"
        placeholder="Add a comment"
        />
        <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
        >
        Submit
        </button>
    </form>
    <div className="comments">
        {comments.map((cmt, index) => (
        <div key={index} className="p-2 border-b">
            <h3>{cmt.userName}</h3>
            <h5>{cmt.text}</h5>
        </div>
        ))}
    </div>
    </div>
);
};

export default CommentSection;
