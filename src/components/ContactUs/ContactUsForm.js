import React, { useState } from "react";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";
import { getDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import SuccessToast from "../Toast/SuccessToast";
import ErrorToast from "../Toast/ErrorToast";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required().min(3),
  email: Yup.string().email().required(),
  mobile: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11)
    .max(13),
});

const ContactUsForm = () => {
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    console.log("Form data", values);
    setDisabled(true);
    try {
      const docRef = doc(db, "EmailSubscribers", values.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        ErrorToast("Your email is already registered");
      } else {
        const response = await setDoc(docRef, {
          ...values,
          timestamp: serverTimestamp(),
          subscribed: true,
        });
        resetForm();
        SuccessToast("Subscribed successfully");
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something Went Wrong");
    } finally {
      setDisabled(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="flex flex-col">
      <div className="pb-4 pt-1 text-center text-lg text-secondary-500">
        Stay Connected!
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-control mb-3">
          <label className="input-group">
            <span>
              <MdPerson className="w-6 h-6" />
            </span>
            <input
              type="text"
              placeholder="Name*"
              className="input w-full border"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-sm text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control mb-3">
          <label className="input-group">
            <span>
              <MdEmail className="w-6 h-6" />
            </span>
            <input
              type="email"
              placeholder="info@site.com*"
              className="input w-full rounded-full"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control mb-6">
          <label className="input-group">
            <span>
              <MdPhone className="w-6 h-6" />
            </span>
            <input
              type="tel"
              placeholder="country code + mobile*"
              className="input w-full rounded-full"
              name="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />
          </label>
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-sm text-red-500">{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-control mb-3">
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full"
            disabled={disabled}
          >
            {disabled ? "Processing.." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
