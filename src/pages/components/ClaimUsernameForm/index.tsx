// Ignite UI
import { Button, TextInput } from '@ignite-ui/react'

// Icons
import { ArrowRight } from 'phosphor-react'

// Styles
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
