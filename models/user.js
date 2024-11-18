import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    username: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 10,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 10,
        match: ["^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$", "Please provide a inimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character."]
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;