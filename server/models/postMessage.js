import mongoose from "mongoose";

//Mongo schema for post attributes
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments:{
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//declaring postSchema as mongoose model 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;