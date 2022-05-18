from fastapi import Header, HTTPException 

async def get_token_header(x_token: str = Header()):
    #frontend sends token header and we compare with what we have in db/file
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")

async def get_query_token(token: str):
    #frontend sends query token and we compare with what we have in db/file
    if token != "jessica":
        raise HTTPException(status_code=400, detail="No Jessica token provided")


