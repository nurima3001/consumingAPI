import { Button, Card, CardActions, CardContent,  CircularProgress, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import usePostService from '../services/post/indeks'

export const PostForm = () => {
    const [post, setPost] = useState()
        const { createPosts, loading } = usePostService()

        const handleCreatePost = async () => {
            await createPosts(post)
            setPost('')
        }
    
    return <Card>
        <CardContent>
        <Typography variant='h6'>
            Post new Feed
        </Typography>
            <TextField multiline placeholder='post' value={post} onChange={({ target: { value } }) => setPost(value)} />
        </CardContent>
        <CardActions>
            <Button variant='contained' onClick={handleCreatePost}>
                { loading && <CircularProgress/> }
                Post
                </Button>
        </CardActions>
    </Card>
}