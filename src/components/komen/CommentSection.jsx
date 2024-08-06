"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HandEye } from '@phosphor-icons/react';
import Comments from '../Home/Comments';
const CommentSection = () => {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetchComment()
    },[])
    const fetchComment = async ( )=>{
        try{
            const response = await axios.get('api/comments')
            setComments(response.data.data)
        }catch(err){
            console.error('error fatching data', err)
        }
    }
    
    const handleFormSubmit = async (e)=>{
        e.preventDefault()
        if(!username && !text){
            alert("nama dan pesan harus di isi!")
            return
        }try{
            await axios.post('/api/comments', {username,text})
            fetchComment()
            setUsername('')
            setText('')
        }catch(err){
            console.error('data err post', err)
        }
    }

    return (
        
        <div className="max-w-2xl mx-auto p-4">
        <Comments buttonLink={true}/>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <label htmlFor="username" >User Name</label>
                <input
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Add a user name"
                    />
                <label htmlFor="text">Comment</label>
                <input
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Add a comment"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-slate-950 text-white rounded"
                >
                    Submit
                </button>
            </form>
            <div className="comments">
                {comments.map((cmt, index) => (
                    <div key={index} className="p-2 border-b">
                        <h3 className='text-xl text-slate-900 font-semibold'>{cmt.username}</h3>
                        <h5 className='text-lg text-slate-500'>{cmt.text}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
