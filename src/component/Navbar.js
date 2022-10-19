import { AppBar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Notifications, Search } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';


const useStyles = makeStyles((theme)=>({
  swiggy:{
       fontSize:30,
       fontWeight:800,
       color:"darkorange"
  },
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"lightblue",
        height:50,
    },    
    Search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:"6px",
        width:"50%"
    },
    input:{
        color:"black",
    },
    badge:{
        marginRight:theme.spacing(2),
    }
 }));

function Navbar() {
  const classes = useStyles()
 
  return (
   <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.swiggy}>
            Swiggy
        </Typography>
        <div className={classes.Search}>
            <Search />
                <InputBase placeholder='Search.....' className={classes.input} />           
        </div>
        <div className={classes.icons}>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>

            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
        </div>
      </Toolbar>
   </AppBar>

  )
}

export default Navbar;  