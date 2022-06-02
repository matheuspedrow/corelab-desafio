import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import {addSchema} from '../modules/user/user.schema'
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1.JSX"
import H5 from "../src/components/typography/H5.JSX"
import Button from "../src/components/inputs/Button.jsx"
import Input from "../src/components/inputs/Input.jsx"

const FormContainer = styled.div `
  margin-top: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 10px;
`

const Text = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 5px;
`

const AddCar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`


function addCar () {
  const { register, handleSubmit} = useForm()

  const [car, setCar] = useState({
    modelo: '',
    ano: '',
    cor: '',
    maxPrice: '',
    minPrice: '',
    descricao: ''
  })

  const onSubmit = data => {
    setCar({
      modelo: data.modelo,
      ano: data.ano,
      cor: data.cor,
      maxPrice: data.maxPrice,
      minPrice: data.minPrice,
      descricao: data.descricao
    })
  }
  
  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitForm = (e) => {
    console.log(car)
  }
    
  return (
    <ImageWithSpace>
      <H1>Adicionar Veículo</H1>
      <H5>Preencha os campos abaixo para adicionar um novo veículo</H5>
      <FormContainer>
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input label="MODELO" type="text" name="modelo" onChange={handleChange} {...register('modelo')} />
          <Input label="ANO" type="text" name="ano" onChange={handleChange} {...register('ano')} />
          <Input label="COR" type="text" name="cor" onChange={handleChange} {...register('cor')} />
          <Input label="PREÇO MÁXIMO" type="number" name="maxPrice" onChange={handleChange} {...register('maxPrice')} />
          <Input label="PREÇO MÍNIMO" type="number" name="minPrice" onChange={handleChange} {...register('minPrice')} />
          <Input label="DESCRIÇÃO" type="text" name="descricao" onChange={handleChange} {...register('descricao')} />
          <Button  type="submit">ADICIONAR</Button>
        </Form>
      </FormContainer>
    </ImageWithSpace>
  )
}
  

export default addCar