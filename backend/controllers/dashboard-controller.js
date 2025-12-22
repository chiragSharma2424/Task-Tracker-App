import userModel from "../models/user-model.js";

async function getAllUsersInfo(req, res) {
    try {
        const allUsers = await userModel.find();

        if(!allUsers) {
            return res.status(404).json({
                msg: "No users found"
            })
        }

        return res.status(200).json({
            msg: "Here is the list of users",
            users: allUsers
        })
    } catch(err) {
        console.log(`error in get all users info controller ${err}`);
        return res.status(501).json({
            msg: "Internal server error"
        })
    }
}

export default getAllUsersInfo;