import { makeStyles,Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider, rgbToHex } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10),
        height:"100vh",
        position:"Sticky",
        top:0,
    },
    title:{
      fontSize:18,
      fontWeight:500,
      color:"secondary",      
    },
    avatar:{
      marginBottom:20,
    },
    list:{
      fontSize:18,
      fontWeight:500,
      color:"purple",
      marginBottom:10,
           
    },
    imageList:{     
      overflow:"hidden",
     
    },
    categories:{
    marginRight: theme.spacing(5),    
    fontSize:20,
    color:"rgb(156, 55, 50)",
    fontWeight:450,
    },
    link:{
      fontSize:25,
      color:"purple",
      fontWeight:500,
      
    }
 }));

function Rightbar() {
    
  const classes = useStyles()
 
  return (
  <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
    <AvatarGroup className={classes.avatar} max={6}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Bemy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Gemy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </AvatarGroup>

    <Typography className={classes.list} gutterBottom>Uploaded Photos</Typography>
       <ImageList rowHeight={130} className={classes.imageList} style={{marginBottom:28}} cols={3}>
        <ImageListItem>
          <img src='/image/pizza2.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/pizza3.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/pizza.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/spicy-food.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/pizza2.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/food1.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/food2.jpeg' alt='' />
        </ImageListItem>
        <ImageListItem>
          <img src='/image/Rice.webp' alt='' />
        </ImageListItem>
       </ImageList>

       <Typography className={classes.link} gutterBottom>More Abouts</Typography>
       <Link href='#' className={classes.categories} variant="body2">Related</Link>
       <Link href='#' className={classes.categories} variant="body2">Help</Link>
       <Link href='#' className={classes.categories} variant="body2">Sport</Link>
       <Divider />
       <Link href='#' className={classes.categories} variant="body2">Privacy</Link>
       <Link href='#' className={classes.categories} variant="body2">Terms</Link>
       <Link href='#' className={classes.categories} variant="body2">Send Feedback</Link>
     
  </Container>

  )
}

export default Rightbar;  