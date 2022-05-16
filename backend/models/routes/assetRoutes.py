from ...app.main import app

@app.get('/')
@app.get('/assets')
def getAsset():
    return "all assets"

@app.get('/assets/{id}')
def getAssetById(id):
    return id 

@app.post('/assets/batch')
def saveAssets(assets):
    for i in assets:
        saveAsset(i)

@app.post('/assets')
def saveAsset(asset):
    return "saving asset"

@app.put('assets/{id}')
def modifyAsset(asset):
    currentAsset = {}
    #fetch asset
    if asset != currentAsset :
        currentAsset = asset 
    return currentAsset

@app.delete('assets/{id}')
def deleteAsset(id):
    return f"deleting asset with id={id}"

    