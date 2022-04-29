import { Button, Card, CardActions, CardContent, Divider, Grid, Paper, TextField } from "@mui/material";

export const Login = ()=>{
    const login = ()=>{
        try{}
        catch{}
    }
    const redirectToSignup = ()=>{
        
    }
    return(
        <>
        <Paper elevation={24}
            sx={{ 
                minWidth: 400, 
                maxWidth: 600, 
                marginLeft: "15%"
                }}
        >
        <Card variant="outlined">
            <CardContent>
                <h2><i>Login</i></h2>
                <Divider/>
                <Grid container spacing={1} >
                    <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        E-mail/Username:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            label="Email/Username" 
                            variant="outlined"
                            sx={{
                                width: "100%",
                                margin: "7px",
                                backgroundColor: "whitesmoke"
                            }}
                        />
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={1} >
                <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        Password:
                </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            type="password" 
                            label= "password" 
                            variant="outlined"
                            sx={{
                                width: "100%",
                                margin: "7px",
                                backgroundColor: "whitesmoke"
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{marginLeft:"60%"}}>
                <Button variant="contained" onClick={login}>Login</Button>
                <Button variant="text" onClick={redirectToSignup}>sign up</Button>
            </CardActions>
        </Card>
        </Paper>
        </>
    )
}