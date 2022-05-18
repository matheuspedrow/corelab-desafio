import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: { type: String, requerid: true, maxlength: 50},
  lastName: { type: String, requerid: true, maxlength: 50},
  user: { type: String, requerid: true, maxlength: 30, unique: true},
  email: { type: String, requerid: true, email: true, maxlength: 100, unique: true},
  password: { type: String, requerid: true}
})

export default mongoose.models.User || mongoose.model('User', UserSchema)