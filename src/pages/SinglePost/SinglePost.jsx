import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function SinglePost() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const goBack = useNavigate()

    const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    const fetchPost = async (id, setPost) => {
        const resp = await api.get(`posts/${id}`)
        setPost(resp.data)
    }

    useEffect(() => {
        fetchPost(id, setPost)
            .then(res => setPost(res.data))
    }, [id])

    return (
        <div>
            <button onClick={() => goBack(-1)}>Back</button>
            <h3>{post.title} ID {id} </h3>
            <p>{post.body}</p>
        </div>
    )
}