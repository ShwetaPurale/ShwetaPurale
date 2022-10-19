import { makeStyles, Container, Tooltip, Fab, Modal, TextField, MenuItem, RadioGroup, FormControlLabel, FormLabel, FormControl, Button, Snackbar } from '@material-ui/core';
import { Add as AddIcon } from '@mui/icons-material';
import { Radio } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import { Alert } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    Container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",       
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(3)
    }

}));

function Add() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const [openAlert, setOpenAlert] = useState(false);
    const handleClose = (event, reason) => {
        console.log("reason", reason)
        if (reason === 'clickaway') {
            // console.log("This is a success message!")
            return;
        }
        setOpenAlert(false);
    };
    // console.log("open alert value", openAlert)



    const [success, setSuccess] = useState(false);
    const handleClick = () => {
        setSuccess(true);
    };


    // Radio Button

    const [gender, setGender] = React.useState('Everybody');

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    // Select

    const [select, setSelect] = useState('Public');
    const handleSelect = (e) => {
        setSelect(e.target.value);
    };

    return (
        <div>
            <Tooltip title="Add" aria-label='add' >
                <Fab color="secondary" className={classes.fab}>
                    < AddIcon onClick={() => setOpen(true)} />
                </Fab>
            </Tooltip>

            <Modal open={open}>
                <Container className={classes.Container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id='standard-basic'
                                label="Title"
                                size='small'
                                color='red' />
                        </div>

                        <div className={classes.item}>
                            <TextField id='outlined-multiline-static'
                                placeholder="Tell about Your Self...."
                                multiline rows={4}
                                variant="outlined"
                                label="Description"
                                size='small'
                                style={{ width: "100%" }} />
                        </div>

                        <div className={classes.item}>
                            <TextField select label="Visibility" >
                                <MenuItem
                                    value="Public"
                                    clicked={select === 'Public'}
                                    onChange={handleSelect}

                                >Public</MenuItem>
                                <MenuItem
                                    value="Private"
                                    clicked={select === 'Private'}
                                    onChange={handleSelect}
                                >Private</MenuItem>
                                <MenuItem
                                    value="Unlisted"
                                    clicked={select === 'Unlisted'}
                                    onChange={handleSelect}
                                >Unlisted</MenuItem>
                            </TextField>
                        </div>


                        <div className={classes.item}>
                            <FormControl>
                                <FormLabel component="legend">Who can comment?</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value="Everybody"
                                        checked={gender === 'Everybody'}
                                        onChange={handleChange}
                                        control={<Radio size='small' color='secondary' />}
                                        label="Everybody" />

                                    <FormControlLabel
                                        value="My Friends"
                                        checked={gender === 'My Friends'}
                                        onChange={handleChange}
                                        control={<Radio size='small' color='secondary' />}
                                        label="My Friends" />

                                    <FormControlLabel
                                        value="Nobody"
                                        checked={gender === 'Nobody'}
                                        onChange={handleChange}
                                        control={<Radio size='small' color='secondary' />}
                                        label="Nobody" />

                                    <FormControlLabel
                                        value="Custom"
                                        checked={gender === 'Custom'}
                                        onChange={handleChange}
                                        disabled
                                        control={<Radio size='small' color='secondary' />}
                                        label="Custom(Premium)" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <Button variant='outlined'
                                color='primary'
                                style={{ margin: 10 }}
                                onClick={handleClick}>
                                Create
                            </Button>

                            <Button variant='outlined'
                                color='secondary'
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>



            <Snackbar open={success} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"  >
                    This is a success message!
                </Alert>
            </Snackbar>



            {/* {console.log("openAlert", openAlert)}

            {openAlert && (<Snackbar
                // open={open}
                autoHideDuration={6000}
            >
                {alert("hello")}
                <h1>hello</h1>
            </Snackbar>)} */}
        </div> 

    );
};

export default Add;

