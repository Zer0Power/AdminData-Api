//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

const mongoose = require("mongoose");

mongoose.connect('MONGO_URI',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db) => {
    console.log("[✅] DB Connected Successfully.");
}).catch((error) =>{
    console.log("[❌] DB Failed To Connect.", error)
})



module.exports = exports = mongoose;

//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//