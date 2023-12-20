import { FC, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { FormValueProps } from "./type";
import "./styles.scss";
import { H4 } from "@finetwork/ui";
import * as Yup from "yup";
interface MyFormProps {
  formRef: React.MutableRefObject<FormikValues | null>;
}
const validationSchema = Yup.object().shape({
  nif: Yup.string()
    .matches(/^\d{8}[a-zA-Z]$/, "El documento de identidad debe ser válido")
    .required("El NIF es obligatorio"),
  name: Yup.string().required("El nombre es obligatorio"),
  firstSurname: Yup.string().required("El primer apellido es obligatorio"),
  phone: Yup.string()
    .matches(/^\d{9}$/, "El teléfono deben ser 9 números")
    .required("El número de teléfono es obligatorio"),
  email: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
});
const MyForm: FC<MyFormProps> = ({ formRef }) => {
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

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValueProps, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        innerRef={(formik: any) => {
          formRef.current = formik;
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <H4 css={{ fontFamily: "Druk sans" }}>02. Titular del contrato</H4>
            <Form className="formik-container">
              <div>
                <label htmlFor="nif">Documento de identidad*</label>
                <Field
                  type="text"
                  id="nif"
                  name="nif"
                  placeholder="Ej: 01234567X"
                />
                <ErrorMessage component="span" name="nif" />
              </div>

              <div>
                <label htmlFor="bornDate">Fecha de Nacimiento*</label>
                <Field type="date" id="bornDate" name="bornDate" />
                <ErrorMessage component="span" name="bornDate" />
              </div>

              <div>
                <label htmlFor="name">Nombre*</label>
                <Field type="text" id="name" name="name" placeholder="Pablo" />
                <ErrorMessage component="span" name="name" />
              </div>

              <div>
                <label htmlFor="firstSurname">Primer Apellido*</label>
                <Field
                  type="text"
                  id="firstSurname"
                  name="firstSurname"
                  placeholder="Rodríguez"
                />
                <ErrorMessage component="span" name="firstSurname" />
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
                <label htmlFor="phone">Teléfono*</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="647803656"
                />
                <ErrorMessage component="span" name="phone" />
              </div>

              <div>
                <label htmlFor="email">Correo Electrónico*</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="pablors92@gmail.com"
                />
                <ErrorMessage component="span" name="email" />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
