import styled from 'styled-components'
import Link from 'next/link'
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1.JSX"
import H3 from "../src/components/typography/H3.JSX"
import H4 from "../src/components/typography/H4.JSX"
import Button from "../src/components/inputs/Button.jsx"
import Input from "../src/components/inputs/Input.jsx"

const FormContainer = styled.div `
  margin-top: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 20px;
`


function SearchPage () {
  return (
    <ImageWithSpace>
      <H1>Pesquisar Veículos</H1>
      <H3>Os melhores veículos estão aqui!</H3>
      <FormContainer>
        <Form>
          <Input label="PESQUISAR" type="text" />
          <Button><Link href="/addcar" ><H4>NOVO VEÍCULO</H4></Link></Button>
        </Form>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SearchPage