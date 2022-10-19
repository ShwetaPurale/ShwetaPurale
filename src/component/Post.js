import { makeStyles, Card, CardActionArea, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10),
    },
    card:{
       marginBottom:theme.spacing(2)
    },
    media:{
        height:350,
        // overflow:"hidden",
        [theme.breakpoints.down("sm")]:{
            height: 150,
        },
    },
 }));

function Post() {
  const classes = useStyles()
 
  return (
    <>
   <Card className={classes.card}>
    <CardActionArea>
        <CardMedia  className={classes.media}
      image="/image/spicy-food.jpeg"
             title="My Post"
             alt=""
             style={{heigh:300}}
        />    
        
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
            with Material Grid, Form, Navbar Modal, and more.Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
           with Material Grid, Form, Navbar Modal, and more.</Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
    </CardActions>    
   </Card>  

   <Card className={classes.card}>
    <CardActionArea>
        <CardMedia  className={classes.media}
      image="/image/food1.jpeg"
             title="My Post"
             alt=""
             style={{heigh:300}}
        />    
        
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
            with Material Grid, Form, Navbar Modal, and more.Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
           with Material Grid, Form, Navbar Modal, and more.</Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
    </CardActions>    
   </Card>  

   <Card className={classes.card}>
    <CardActionArea>
        <CardMedia  className={classes.media}
      image="/image/food2.jpeg"
             title="My Post"
             alt=""
             style={{heigh:300}}
        />    
        
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
            with Material Grid, Form, Navbar Modal, and more.Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
           with Material Grid, Form, Navbar Modal, and more.</Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
    </CardActions>    
   </Card>  

   <Card className={classes.card}>
    <CardActionArea>
        <CardMedia  className={classes.media}
      image="/image/Rice.webp"
             title="My Post"
             alt=""
             style={{heigh:300}}
        />    
        
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
            with Material Grid, Form, Navbar Modal, and more.Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
           with Material Grid, Form, Navbar Modal, and more.</Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
    </CardActions>    
   </Card>  

   <Card className={classes.card}>
    <CardActionArea>
        <CardMedia  className={classes.media}
      image="/image/pizza2.jpeg"
             title="My Post"
             alt=""
             style={{heigh:300}}
        />    
        
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
            with Material Grid, Form, Navbar Modal, and more.Lorem Learn Material UI from scratch. Material UI crash course for beginners. React Material UI responsive examples 
           with Material Grid, Form, Navbar Modal, and more.</Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
    </CardActions>    
   </Card>  
 
  </>
   
  )
}

export default Post;  