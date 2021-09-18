import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTranactionModal: () => void;
}

export function Header({ onOpenNewTranactionModal }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTranactionModal}>
          Nova transação
        </button>       
      </Content>
    </Container>
  )
}