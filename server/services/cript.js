import bcrypt from 'bcryptjs'

class servCript {
    async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }
    async comparePassword(password, receivedPassword) {
        return await bcrypt.compare(password, receivedPassword)
    }
}

export default servCript
