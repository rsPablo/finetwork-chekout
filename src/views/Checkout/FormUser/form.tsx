import { FC, useMemo } from "react";
import { Formik, Form, Field } from "formik";
import { FormValueProps } from "./type";
import "./styles.scss";
import { H4 } from "@finetwork/ui";

const MyForm: FC = () => {
  const initialValues: FormValueProps = useMemo(() => {
    return {
      nif: "",
      bornDate: new Date(),
      name: "",
      firstSurname: "",
      secondSurname: "",
      phone: "",
      email: "",
    };
  }, []);

  const handleSubmit = (values: FormValueProps) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <>
            <H4>02. Titular del contrato</H4>
            <Form className="formik-container">
              <div>
                <label htmlFor="nif">Documento de identidad</label>
                <Field
                  type="text"
                  id="nif"
                  name="nif"
                  placeholder="Ej: 01234567X"
                />
              </div>

              <div>
                <label htmlFor="bornDate">Fecha de Nacimiento</label>
                <Field type="date" id="bornDate" name="bornDate" />
              </div>

              <div>
                <label htmlFor="name">Nombre</label>
                <Field type="text" id="name" name="name" placeholder="Pablo" />
              </div>

              <div>
                <label htmlFor="firstSurname">Primer Apellido</label>
                <Field
                  type="text"
                  id="firstSurname"
                  name="firstSurname"
                  placeholder="Rodríguez"
                />
              </div>

              <div>
                <label htmlFor="secondSurname">Segundo Apellido</label>
                <Field
                  type="text"
                  id="secondSurname"
                  name="secondSurname"
                  placeholder="Sánchez"
                />
              </div>

              <div>
                <label htmlFor="phone">Teléfono</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="647803656"
                />
              </div>

              <div>
                <label htmlFor="email">Correo Electrónico</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="pablors92@gmail.com"
                />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
