from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .dependencies.dependencies import get_query_token, get_token_header
from models.routes import assetRoutes, userRoutes
from .internal import admin

app = FastAPI(dependencies=[Depends(get_query_token)])
app.include_router(assetRoutes.asset_router)
app.include_router(userRoutes.user_router)
app.include_router(
    admin.router,
    prefix="/admin",
    tags=["admin"],
    dependencies=[Depends(get_token_header)],
    responses={418: {"description": "I'm a teapot"}},
)


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8080",
    "http://retme.tech"
    "https://retme.tech"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=720
)
