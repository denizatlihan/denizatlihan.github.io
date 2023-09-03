import { Grid, Card, Box } from '@mui/material/'
import LatestProjects from '../../pages/LatestProjects'
import LatestNews from '../../pages/LatestNews'
import BlogPosts from '../../pages/BlogPosts'

export default function Home() {
  return (
    <div>
      <h1 style={{ margin: 64 }}>Deniz\'s Personal Web Page</h1>
      <Grid container spacing={0} style={{ margin: 64 }}>
        <Grid xs={12}>
          <h1>Latest Projects</h1>
          <LatestProjects />
        </Grid>
        <Grid xs={4}>
          <h1>Latest News</h1>
          <LatestNews />
        </Grid>
        <Grid xs={8}>
          <h1>Blog Posts</h1>
          <BlogPosts />
        </Grid>

      </Grid>
    </div>
  )
}
