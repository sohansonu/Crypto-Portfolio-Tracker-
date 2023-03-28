exports.getTest = async (req,res) => {
    res.status(200).json({
        message : "This is TEST API",
    });
}