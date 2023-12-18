import { Input } from "@finetwork/ui";
import "./styles.scss";
const FormUser = () => {
  return (
    <div className="form-user-container">
      <div className="form-user">
        <div className="form-user__column">
          <Input label="Documento de identidad" placeholder="Ej: 01234567X" />
          <Input label="Primer apellido" placeholder="Ej: Rodríguez" />
          <Input label="Fecha de nacimiento" placeholder="Ej: 01-02-1990" />
        </div>
        <div className="form-user__column">
          <Input label="Nombre" placeholder="Ej: Pablo" />
          <Input label="Segundo apellido" placeholder="Ej: Sánchez" />
          <Input label="Teléfono de contacto" placeholder="Ej: 647803656" />
        </div>
      </div>
      <div className="form-user">
        <Input
          label="Correo electrónico"
          placeholder="Ej: pablorodriguez@gmail.com"
        />
      </div>
    </div>
  );
};

export default FormUser;
