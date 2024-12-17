const cds = require('@sap/cds')
 
async function ConnectBackend(req) {

    const backendconnect = await cds.connect.to('gwsample')

    const tx = backendconnect.tx(req);
    return tx.run(req.query)
 
}
 
module.exports = {
    ConnectBackend
}