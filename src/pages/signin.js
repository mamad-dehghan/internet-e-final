import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Link from "next/link";
import Head from "next/head";


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z ]{4,20}$/, 'نا معتبر')
        .required('الزامی'),
    phone: Yup.string()
        .matches(/^[0][9][0-9]{9}$/, 'نا معتبر')
        .required('الزامی'),
    email: Yup.string()
        .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "نا معتبر")
        .required('الزامی'),
    address: Yup.string()
        .matches(/^[a-z0-9. '-]{10,80}$/, 'نا معتبر')
        .required('الزامی')
});
export default () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            phone: '',
        },
        validateOnMount: false,
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(formik.values));
            axios({
                method: "post",
                url: 'https://c8cdeo.sse.codesandbox.io/addUser/',
                data: JSON.stringify(formik.values)
            })
                .then(res => res.data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))
        },
    });
    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <main className="signin">
                <Link href="/">Back to home</Link>
                <form onSubmit={formik.handleSubmit}>
                    <div className="signin--form-section">
                        <label htmlFor="name">Name</label>
                        <input
                            className={`signin--input ${!!formik.errors.name ? 'signin--input-error' : ''}`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="firstname lastname"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <span className="signin--error-message">{formik.errors.name}</span>
                    </div>
                    <div className="signin--form-section">
                        <label htmlFor="address">Address</label>
                        <input
                            className={`signin--input ${!!formik.errors.address ? 'signin--input-error' : ''}`}
                            id="address"
                            name="address"
                            type="text"
                            placeholder="yazd, 12's street, 2's square"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        <span className="signin--error-message">{formik.errors.address}</span>
                    </div>
                    <div className="signin--form-section">
                        <label htmlFor="phone">Phone number</label>
                        <input
                            className={`signin--input ${!!formik.errors.phone ? 'signin--input-error' : ''}`}
                            id="phone"
                            name="phone"
                            type="phone"
                            placeholder="09123456789"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <span className="signin--error-message">{formik.errors.phone}</span>
                    </div>
                    <div className="signin--form-section">
                        <label htmlFor="email">Email Address</label>
                        <input
                            className={`signin--input ${!!formik.errors.email ? 'signin--input-error' : ''}`}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="sample@provider.domain"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <span className="signin--error-message">{formik.errors.email}</span>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
}