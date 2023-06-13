import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks/localStorage"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import { PostForm } from "../../components/PostForm"
import { Feed } from "../../components/Feed"
import { useState } from "react"
import { usePostService } from "react"
export const HomePage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    const { getPosts } = usePostService()
    const [posts, setPosts] = useState([])
    const fetchPost = async () => {
        const _posts = await getPosts()
        setPosts(_posts)
    }

    useEffect(() => {
        fetchPost().then()
    }, [])
    useEffect(() => {
        !credentials && navigate('/login')
    },[credentials])
    const afterPostSuccessHandle = () => {
        
    }
    return <div>
    <div style={{maxWidth: 1080, margin: 'auto'}} >

        <Grid container spacing={1}>
            <Grid item md={3} lg={3}>
            </Grid>
            <Grid item md={3} lg={9}>
                <h4>Feeds</h4>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid item md={3} lg={3}>
                <PostForm/>
            </Grid>
            <Grid item md={3} lg={9}>
               <Feed/>
            </Grid>
        </Grid>
    </div>
</div>
}