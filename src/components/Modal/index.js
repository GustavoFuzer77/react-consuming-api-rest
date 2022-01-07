import { Overlay, Container, Footer } from "./styled"
import { Button } from '../Button';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>
          Body do MODAL [...]
        </p>
        <Footer >
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>TESTE</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modals')
  )
}


Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
