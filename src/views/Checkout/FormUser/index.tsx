import { H4, Input } from "@finetwork/ui";

import "./styles.scss";
const FormUser = () => {
  return (
    <>
      <H4>02. Titular del contrato</H4>
      <div className="form-user-container">
        <div className="form-user">
          <div className="form-user__column">
            <Input
              id="nif"
              label="Documento de identidad"
              placeholder="Ej: 01234567X"
              info="Sin guiones"
            />
            <Input id="name" label="Nombre" placeholder="Ej: Pablo" />
            <Input
              id="lastname"
              label="Primer apellido"
              placeholder="Ej: Rodríguez"
            />
          </div>
          <div className="form-user__column">
            <Input
              id="date_of_birth"
              label="Fecha de nacimiento"
              placeholder="Ej: 01-02-1990"
              info="DD-MM-YYYY"
            />
            <Input
              id="secondsurname"
              label="Segundo apellido"
              placeholder="Ej: Sánchez"
            />
            <Input
              id="phone"
              label="Teléfono de contacto"
              placeholder="Ej: 647803656"
              info="Nos pondremos en contacto contigo en este teléfono"
            />
          </div>
        </div>
        <div className="form-user">
          <div className="form-user__email">
            <Input
              id="email"
              label="Correo electrónico"
              placeholder="Ej: pablorodriguez@gmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUser;
