import '../css/SobreNosotros.css';
import { Container } from 'react-bootstrap';

function SobreNosotros() {
  return (
    <Container as="main" className="my-5">
      <section className="mb-5">
        <h2>¿Quiénes Somos?</h2>
        <p></p>
      </section>

      <section className="mb-5">
        <h2>Nuestra Historia</h2>
        <p></p>
      </section>

      <section className="mb-5">
        <h2>Equipamentos</h2>
        <p></p>
        <ul>
          <li><strong>Carla Rojas</strong> – Fundadora y Directora General</li>
          <li><strong>Ignacio Muñoz</strong> – Gerente de Logística</li>
          <li><strong>Antonia Herrera</strong> – Encargada de Atención al Cliente</li>
          <li><strong>Tomás Valdivia</strong> – Diseñador de Producto y Fotógrafo</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Misión</h2>
        <p></p>
      </section>

      <section className="mb-5">
        <h2>Visión</h2>
        <p></p>
      </section>
    </Container>
  );
}

export default SobreNosotros;