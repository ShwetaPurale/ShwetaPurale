
import { makeStyles,Grid } from '@material-ui/core';
import Navbar from './component/Navbar';
import Leftbar from './component/Leftbar';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Add from './component/Add';


const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:
    {
      display:"none"
    }
  }
 }));

function App() {
  const classes = useStyles()
 
  return (
   <div>
    <Navbar />
    <Grid container>
      <Grid item sm={2} xs={2}>
        <Leftbar />
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed />
      </Grid>
      <Grid item sm={3} className={classes.right}>
      <Rightbar />
      </Grid>
    </Grid>
    <Add />
   </div>

  )
}

export default App;  
