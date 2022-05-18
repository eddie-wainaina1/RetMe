from fastapi import APIRouter, Depends, HTTPException
from ...app.dependencies.dependencies import get_token_header

asset_router = APIRouter(
    prefix="/assets",
    tags=["assets"],
    dependencies=[Depends(get_token_header)],
    responses={
        404: {"description": "Not found"}
    },
)

@asset_router.get('/')
def getAsset():
    return "all assets"

@asset_router.get('/{id}')
def getAssetById(id):
    return id 

@asset_router.post('/batch')
def saveAssets(assets):
    for i in assets:
        saveAsset(i)

@asset_router.post('/')
def saveAsset(asset):
    return "saving asset"

@asset_router.put('/{id}')
def modifyAsset(asset):
    currentAsset = {}
    #fetch asset
    if asset != currentAsset :
        currentAsset = asset 
    return currentAsset

@asset_router.delete('assets/{id}')
def deleteAsset(id):
    return f"deleting asset with id={id}"

    