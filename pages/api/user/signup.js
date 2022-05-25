import Joi from 'joi'
import { withIronSessionApiRoute } from "iron-session/next";
import createHandler from '../../../lib/midleweres/nextConnect'
import { ironConfig} from '../../../lib/midleweres/ironSession'
import validate from '../../../lib/midleweres/validation'
import {signupSchema} from '../../../modules/user/user.schema'

import {signupUser} from '../../../modules/user/user.service'


const signup = createHandler()

signup.post(validate({ body: signupSchema}), async (req, res) => {
  try{
    const user = await signupUser(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()

    res.status(201).json({ok: true})
  } catch (err) {
    console.error(err)
    throw err
  }
  
})


export default withIronSessionApiRoute(signup, ironConfig)