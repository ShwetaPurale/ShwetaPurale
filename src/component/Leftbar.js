import { Container, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, ViewList, Home, People, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "lightBlue",
        height: "100vh",
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        },
        [theme.breakpoints.up("md")]: {
            backgroundColor: "lightBlue",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px",           
        },
        color:"black",
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer"
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        color:"black",
    },

}));

function Leftbar() {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Tooltip title="Home" >
                    <IconButton >
                        <Home className={classes.icon} />
                        <Typography className={classes.text}>Homepage</Typography>
                    </IconButton>
                </Tooltip>
            </div>

            <div className={classes.item}>
                <Tooltip title="Friends" >
                    <IconButton aria-label='friends'>
                        <People className={classes.icon} />
                        <Typography className={classes.text}>Friends</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Lists" >
                    <IconButton >
                        <ViewList className={classes.icon} />
                        <Typography className={classes.text}>Lists</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Camera" >
                    <IconButton >
                        <PhotoCamera className={classes.icon} />
                        <Typography className={classes.text}>Camera</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Vedio" >
                    <IconButton >
                        <PlayCircleOutline className={classes.icon} />
                        <Typography className={classes.text}>Vedio</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Apps" >
                    <IconButton >
                        <TabletMac className={classes.icon} />
                        <Typography className={classes.text}>Apps</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Collection" >
                    <IconButton >
                        <Bookmark className={classes.icon} />
                        <Typography className={classes.text}>Collection</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Market Place" >
                    <IconButton >
                        <Storefront className={classes.icon} />
                        <Typography className={classes.text}>Market Place</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Settings" >
                    <IconButton >
                        <Settings className={classes.icon} />
                        <Typography className={classes.text}>Settings</Typography>
                    </IconButton>
                </Tooltip>


            </div>

            <div className={classes.item}>
                <Tooltip title="Log Out" >
                    <IconButton >
                        <ExitToApp className={classes.icon} />
                        <Typography className={classes.text}>Log Out</Typography>
                    </IconButton>
                </Tooltip>


            </div>
        </Container>

    )
}

export default Leftbar;  