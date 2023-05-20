import React, { useState } from 'react'

export default function CreatePost () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', body: JSON.stringify({ title, body }),
            headers: {'Content-type': 'application/json'}
        })

        const data = await response.json()
        console.log(data)
        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Body:</label>
                <input value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <button type='submit'>Create Post</button>
        </form>
    )
}