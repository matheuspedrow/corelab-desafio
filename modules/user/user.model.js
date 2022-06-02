import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  marca: { type: String, requerid: true, maxlength: 50},
  cor: { type: String, requerid: true, maxlength: 50},
  ano: { type: Number, requerid: true, maxlength: 4},
  maxPrice: { type: Number, requerid: true, maxlength: 10},
  minPrice: { type: Number, requerid: true},
  descricao: { type: String, requerid: true, maxlength: 500}
})

export default mongoose.models.User || mongoose.model('User', UserSchema)