//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//
//Import Packages

const mongoose = require("./src/dbConnect")
const Admins = require("./src/schemas/AdminSchema")

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

app.listen(3000, () => {
    console.log('[📶]Server Is Running Properly ....\n[ℹ️]Port : 3000');
});

app.post('/db', async (req, res) => {

    const data = req.body;
    const steamid = data.steamid;
    const username = data.username;
    const timeplay_spect = data.timeplayspect;
    const timeplay = data.timeplay;
    const current_login = data.current;
    const admin_group = data.group;
    const admin_ip = data.ip;
    const admin_xp = data.xp;
    const timeplay_main = data.timeplaymain;


    console.log(`SteamID: ${steamid}, Username: ${username}, Spect Timeplay: ${timeplay_spect}, Timeplay: ${timeplay}, CurrentLogin: ${current_login}, Group: ${admin_group}, IP: ${admin_ip}, Rank: ${admin_xp}, Main Timeplay: ${timeplay_main} `);
    console.log(JSON.stringify(req.body))

    
    Admins.find({
        SteamID: steamid
    }, async function(err, item) {
        
        if(item.length < 1){

            try{
                const newAdmin = await Admins.create({
                    SteamID: steamid,
                    username: username,
                    timeplay_spect: timeplay_spect,
                    timeplay: timeplay,
                    current_login: current_login,
                    admin_group: admin_group,
                    admin_xp: admin_xp,
                    admin_ip: admin_ip,
                    timeplay_main: timeplay_main 
                })
                console.log("[📓]New Admin Record Saved.", steamid)
            }catch (error) {
                console.log("[❌]Failed To Save New Admin.", error)
            }

        }else{

            try{
                const updateAdmin = await Admins.findOneAndUpdate(
                    {
                        SteamID: steamid
                    },
                    {
                        username: username,
                        current_login: current_login,
                        admin_group: admin_group,
                        admin_ip: admin_ip,
                        timeplay_main: timeplay_main,
                        admin_xp: admin_xp,
                        $inc: { timeplay_spect: timeplay_spect,timeplay: timeplay } 
                    }
                )
                console.log("[📓]Admin Record Updated.", steamid)
    
            }catch (error){
                console.log("[❌]Failed To Update Admin.", error)
            }
            
        }

    })

    res.sendStatus(200);

    });
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//
