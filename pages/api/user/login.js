import Joi from 'joi'

import createHandler from '../../../lib/midleweres/nextConnect'
import validate from '../../../lib/midleweres/validation'
import { login } from '../../../modules/user/user.service'

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
})

const handler = createHandler();

handler.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    const user = await login(req.body)
    res.send(user)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default handler
