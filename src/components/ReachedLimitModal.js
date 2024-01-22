import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ReachedLimitModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¡Ups! Limite de cuota diario alcanzado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Tiempo Argentina</strong> usa los servicios del clima proporcionados por <strong>Accuweather</strong>. Estos servicios tienen un limite de uso al día.
          </p>
          <p>
            Por favor, volvé mañana. Ya que el servicio se renueva todos los días. 
          </p>
          <p>
            ¡Disculpa las molestias y gracias por usar la app!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Aceptar</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ReachedLimitModal