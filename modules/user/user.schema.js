import Joi from 'joi'

export const addSchema = Joi.object({
  marca: Joi.string().required().max(50),
  cor: Joi.string().required().max(50),
  ano: Joi.number().required().min(1900).max(2023),
  maxPrice: Joi.number().required().min(0),
  minPrice: Joi.number().required().min(0).max(Joi.ref('maxPrice')),
  descricao: Joi.string().required().max(500),
})