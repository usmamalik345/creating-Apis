import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId: {
        type: string,
        required: true,

    },

    title: {
        type: string,
        required: true,

    },

    desc: {
        type: string,
        required: true,

    },

    imgUrl: {
        type: string,
        required: true,

    },

    VideoUrl: {
        type: string,
        required: true,
    },

    views: {
        type: Number,
        default: 0,
    },

    tags: {
        type: [String],
        default: [],
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    }


}, { timestamps: true })

exports default mongoose.model("Video", VideoSchema)