import axios, { Axios } from 'axios';
import Style from './Register.module.css'
import { Formik, useFormik } from 'formik';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Audio } from 'react-loader-spinner'

export default function Register() {

    // function validate(values){

    //     let phoneRegex = /^\+\d{1,3}\d{5,9}$/

    //     let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    //     let errors = {};

    //     if (!values.name){
    //         errors.name = "name is required"
    //     }
    //     else if(values.name.length < 3){
    //         errors.name = "name minlength is 3"
    //     }

    //     else if(values.name.length > 11){
    //         errors.name = "name maxlength is 11"
    //     }

    //     if (!values.phone){
    //         errors.phone = "phone is required"
    //     }
    //     else if(!phoneRegex.test(values.phone))
    //     {
    //         errors.phone = "phone is invalid"
    //     }

    //     if (!values.email){
    //         errors.email = "email is required"
    //     }
    //     else if(!emailRegex.test(values.email))
    //     {
    //         errors.email = "email is invalid"
    //     }




    //     return errors;
    // }




    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function submitRegister(values) {
        setLoading(true);
        let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values)
            .catch((err) => {
                setLoading(false);
                setError(err.response.data.message)
            })
        if (data.message === 'success') {
            setLoading(false);
            navigate('/login');
        }
    }


    let phoneRegex = /^\+\d{1,3}\d{5,9}$/
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/
    let validationSchema = Yup.object({
        name: Yup.string().min(3, 'name minlength is 3').max(11, 'name maxlength is 11').required('name is required'),
        email: Yup.string().matches(emailRegex, ' email is invaild').required('email is required'),
        phone: Yup.string().matches(phoneRegex, 'phone is invalid').required('phone is required'),
        password: Yup.string().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, and one special character').min(8, 'Password must be at least 8 characters long').required('Password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
    });
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        }, validationSchema,
        onSubmit: submitRegister
    })



    return <>
        <div className='w-50 mx-auto py-5'>
            {error !== null ? <div className='alert alert-danger p-2'>{error}</div> : ''}
            <h3>Register Now</h3>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input className='form-control' name='name' value={formik.values.name} id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.name}</div> : ''}

                <label htmlFor="email">Email:</label>
                <input className='form-control' name='email' value={formik.values.email} id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> : ''}

                <label htmlFor="phone">phone:</label>
                <input className='form-control' name='phone' value={formik.values.phone} id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.phone}</div> : ''}

                <label htmlFor="password">password:</label>
                <input className='form-control' name='password' value={formik.values.password} id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> : ''}

                <label htmlFor="rePassword">rePassword:</label>
                <input className='form-control' name='rePassword' value={formik.values.rePassword} id='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.rePassword}</div> : ''}

                {isLoading ?
                    <button type='button' className='btn bg-main text-white mt-2'>
                        <Audio
                            height="20"
                            width="80"
                            radius="9"
                            color='white'
                            ariaLabel='three-dots-loading'
                            wrapperStyle
                            wrapperClass
                        />
                    </button> : <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white mt-2'>Register</button>}


            </form>
        </div>

    </>
}

