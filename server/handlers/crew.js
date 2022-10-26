const db = require('../models');


exports.showCrews = async (req, res, next) => {
    try {
        const crews = await db.Crew.find().populate('user', ['username', 'id']);

        res.status(200).json(crews);
    } catch(err) {
        err.status = 400;
        next(err);
    }
};

// exports.usersPolls = async (req, res, next) => {
//     try {
//         const {id} = req.decoded;

//         const user = await db.User.findById(id).populate('polls');

//         res.status(200).json(user.polls);

//     } catch(err) {
//         err.status = 400;
//         next(err);
//     }
// }

exports.createCrew = async (req, res, next) => {
    try {
        const { id } = req.decoded;
        const user = await db.User.findById(id);

        const {crewName, users} = req.body;
        const crew = await db.Crew.create({
            crewName,
            user,
            users
        });

        return res.status(201).json({ ...crew._doc , user: user._id });
    } catch(err) {
        err.status = 400;
        next(err);
    }
}

exports.getCrew = async (req, res, next) => {
    try {
        const {id} = req.params;
        
        const crew = await db.Crew.findById(id).populate('user', ['username', 'id']);
        if(!crew) {
            throw new Error('No crew found');
        } 

        res.status(200).json(crew);

    } catch(err) {
        err.status = 400;
        next(err);
    }
}

exports.deleteCrew = async (req, res, next) => {
    try {
        const {id: crewId} = req.params;
        const {id: userId} = req.decoded;

        const crew = await db.Crew.findById(crewId);
        if(!crew) {
            throw new Error("No crew found");
        }
        if(crew.user.toString() !== userId) {
            throw new Error("Unauthorized access");
        }

        await crew.remove();
        res.status(200).json(crew);

    } catch(err) {
        err.status = 400;
        next(err);
    }
}
