"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constant_1 = require("./user.constant");
const userSchema = new mongoose_1.Schema({
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: user_constant_1.userRoles,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    address: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        default: 0,
        required: true,
    },
    income: {
        type: Number,
        default: 0,
        required: true,
    },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)('User', userSchema);
