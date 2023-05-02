const mongoose = require('mongoose')
const bcrypt  = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // every email that is tied to a user to be unique
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// regular function in order to use 'this' keyword
userSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified('password')) {
        return next()
    }

    bcrypt.genSalt(10, (error, salt) => {
        if (error) {
            return next(error)
        }

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) {
                return next(error)
            }

            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePasswords = function(candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
            if (error) {
                return reject(error)
            }

            if (!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })
}

mongoose.model('User', userSchema)