import { Box, Paper } from "@mui/material"

interface BigHeaderProps{
    title:string,
    description:string,
    photoUrl ?: string
}
export const BigHeader = (props:BigHeaderProps)=>{
    return (
        <>
            <Box
            sx={{
                marginTop:"0",
                height: "30vh"
            }}
            >
                <Paper 
                    elevation={6}
                    sx={{
                        marginTop:"0",
                        height:"100%"
                    }}
                >
                    <div
                    style={{
                        height:"100%",
                        backgroundImage:`url(${props.photoUrl})` 
                    }}>
                    <h1 className="bigTitle">
                        {props.title}
                    </h1>
                    <p>
                        {props.description}
                    </p>
                    </div>
                </Paper>
            </Box>
        </>
    )
}