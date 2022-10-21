import { useState } from 'react';

// material-ui
import { Box, Avatar, Typography, TextField, Button, FormControlLabel, Grid, Checkbox, Link } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

// _mocks import
import { AUTH } from '../../data/auth';

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        try {
            if (username !== AUTH.username || password !== AUTH.password) {
                return alert('Username and Password is invalid!');
            } else if (username === AUTH.username || password === AUTH.password) {
                return alert('Success');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={onLogin} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default LoginComponent;
