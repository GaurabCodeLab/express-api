const model = require("../model/user");
const User = model.User;

exports.createUser = async (req, res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.getAllUser = async (req, res)=>{
    try {
        const getAllUser = await User.find();
        res.status(200).json(getAllUser);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.getUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const getSingalUser = await User.findOne({_id : id});
        res.status(200).json(getSingalUser);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.replaceUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const replacedUser = await User.findOneAndReplace({_id : id}, req.body, {new : true, upsert : false});
        res.status(200).json(replacedUser);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.updateUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const updatedUser = await User.findOneAndUpdate({_id : id}, req.body, {new : true, upsert : false});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.deleteUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedUser = await User.findOneAndDelete({_id : id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json(error);
    }
};

