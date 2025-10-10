import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Data:", values);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Mock API Response:", data);
        resetForm();
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 max-w-sm mx-auto">
          <h2>User Registration (Formik)</h2>
          <Field name="username" type="text" placeholder="Username" className="block w-full mb-2 border p-2" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

          <Field name="email" type="email" placeholder="Email" className="block w-full mb-2 border p-2" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          <Field name="password" type="password" placeholder="Password" className="block w-full mb-2 border p-2" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

          <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
