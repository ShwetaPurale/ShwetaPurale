import { makeStyles,Container } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10),
    }
 }));

function Feed() {
  const classes = useStyles()
 
  return (
    <Container className={classes.container}>

    <Post />   
    
    </Container>
  )
}

export default Feed;  