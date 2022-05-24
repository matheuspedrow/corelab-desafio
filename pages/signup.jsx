import { useState } from 'react'

import styled from 'styled-components'
import Link from 'next/link'
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1.JSX"
import H2 from "../src/components/typography/H2.JSX"
import H4 from "../src/components/typography/H4.JSX"
import Button from "../src/components/inputs/Button.jsx"
import Input from "../src/components/inputs/Input.jsx"

const FormContainer = styled.div `
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`


function SignupPage () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const handleForm = (event) => {
    event.preventDefault()
    console.log({
      firstName,
      lastName,
      user,
      password,
      email
    })
  }

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>O que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta.</H2>
        <Form onSubmit={handleForm}>
          <Input label="Nome" onChange={({target}) => {setFirstName(target.value)}} />
          <Input label="Sobrenome" onChange={({target}) => setLastName(target.value)} />
          <Input label="Usuário" onChange={({target}) => setUser(target.value)} />
          <Input label="E-mail" type="email" onChange={({target}) => setEmail(target.value)} />
          <Input label="Senha" type="password" onChange={({target}) => setPassword(target.value)} />
          <Button>Criar conta</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage