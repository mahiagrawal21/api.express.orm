import Sequelize from "sequelize";
import { sqlize, dbconnection } from "../core/connection";

const User = sqlize.define('users', {
    user_id:{
        type: Sequelize.INTEGER
    },
    username: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Photos = sqlize.define('photos', {
    url: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Comments = sqlize.define('comments', {
    contents: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    photo_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Likes = sqlize.define('likes', {
    comment_id: {
        type: Sequelize.INTEGER
    },
    totallikes: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

(async ()=> {
    await User.sync({alter: true});
    await Likes.sync({alter: true});
    await Comments.sync({alter:true});
    await Photos.sync({alter: true});
})();

export { User, Photos, Comments, Likes };