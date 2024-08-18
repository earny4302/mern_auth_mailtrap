import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastlogin: {
        type: String,
        default: Date.now,
    },
    isVerified: {
        type: String,
        default:false,
    },
    resetPasswordToken: String,
    resetPasswordExpriesAt: Date,
    verificationToken: String,
    verificationTokenExpriesAt: Date,

},{timestamps: true});
export const User = mongoose.model('User', userSchema);