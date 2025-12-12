
const signup = async (req, res) => {
    try {

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(501).json({
            msg: "Internal server error"
        })
    }
}

const signin = async (req, res) => {
    try {

    } catch(err) {
        console.log(`error in signin controller ${err}`)
    }
}

export { signup, signin };