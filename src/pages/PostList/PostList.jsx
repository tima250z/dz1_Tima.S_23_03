import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../App.css'


export default function PostList () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
    }, [])

    return (
        <div><h4>Posts</h4>
            <ul>{posts.map( p =>
                <li key={p.id}>
                    <Link to={`${p.id}`}>
                        {p.title}
                    </Link>
                </li>)}
            </ul>
            <Link to={`/create`}><p>
                Create Post</p></Link>
        </div>
    )
}