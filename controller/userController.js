const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"Name" : "Krunal", "Age": "22" }});
}



module.exports = {
    getUser
}