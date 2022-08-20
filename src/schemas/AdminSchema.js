//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    SteamID: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    username: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    timeplay_spect: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    timeplay: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    current_login: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    admin_group: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    admin_ip: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    admin_xp: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    timeplay_main: {
        type: mongoose.SchemaTypes.Number,
        required: true
    }

})

module.exports = mongoose.model('Admins', AdminSchema);
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//