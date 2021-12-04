import React from 'react'
import {Helmet} from 'react-helmet';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {Box,Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const Register=()=>{
    const paperStyle={padding :32,height:'582px',width:380, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    const formik = useFormik({
        initialValues: {
          ID: '1234',
          password: 'Password123'
        },
        validationSchema: Yup.object({
          ID: Yup
            .number().positive()
            .required(
              'Must be a valid ID')
            .max(255)
            .required(
              'ID is required'),
          password: Yup
            .string()
            .max(255)
            .required(
              'Password is required')
        }),
        //onSubmit: () => {
         // router.push('/');
        //}
      });
    return(
        <>
        <Helmet>
                <style>{'body { background-color: #262727; }'}</style>
        </Helmet>
        <Box>
            <Grid
        container
        spacing={3}
        >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
              error={Boolean(formik.touched.ID && formik.errors.ID)}
              fullWidth
              helperText={formik.touched.ID && formik.errors.ID}
              label="ID"
              margin="normal"
              name="ID"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="ID"
              value={formik.values.ID}
              variant="outlined"
            />
            
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Choose your address</InputLabel>
        <Select
        width= 'fit-content'
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='1'>A1</MenuItem>
          <MenuItem value='2'>A2</MenuItem>
          <MenuItem value='3'>A3</MenuItem>
        </Select>
      </FormControl>
    
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type={passwordShown ? "text" : "password"}
              value={formik.values.password}
              variant="outlined"
              InputProps={{endAdornment: <InputAdornment position="end">
              <IconButton
                onClick={togglePassword}
              >
                {passwordShown ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>}}
            />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </Box>
        </>
    )
}

export default Register