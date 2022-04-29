import { Paper, Card, CardContent, Divider, Grid, TextField, CardActions, Button } from "@mui/material"

export const Signup = ()=>{
    const signup = ()=>{
        try{}
        catch{}
    }
    const redirectToLogin = ()=>{

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
                <h2><i>Sign up</i></h2>
                <Grid container spacing={1} >
                    <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        First Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            label="First Name" 
                            variant="outlined"
                            sx={{
                                width: "100%",
                                margin: "7px",
                                backgroundColor: "whitesmoke"
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        Last Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            label="Last Name" 
                            variant="outlined"
                            sx={{
                                width: "100%",
                                margin: "7px",
                                backgroundColor: "whitesmoke"
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        E-mail:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField 
                            type="email"
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
                <Grid container spacing={1} >
                    <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        Username:
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
                <Grid container spacing={1} >
                <Grid item xs={3}
                    style={{
                        marginTop:"25px"
                    }}
                    >
                        Confirm Password:
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
                <Button variant="contained" onClick={signup}>Signup</Button>
                <Button variant="text" onClick={redirectToLogin}>login</Button>
            </CardActions>
        </Card>
        </Paper>
        </>
    )
}