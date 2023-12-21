import axios, { Axios } from 'axios';
import { Formik, useFormik } from 'formik';
import Style from './Login.module.css'
import react, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Audio } from 'react-loader-spinner'
import { userContext } from '../Context/userContext';

export default function Login() {

    let {setUserToken} = useContext(userContext);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function submitRegister(values) {
        setLoading(true);
        let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values)
            .catch((err) => {
                setLoading(false);
                setError(err.response.data.message)
            })
        if (data.message === 'success') {
            setLoading(false);
            localStorage.setItem('userToken', data.token);
            setUserToken(data.token);
            navigate('/');
        }
    }



    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/
    let validationSchema = Yup.object({

        email: Yup.string().matches(emailRegex, ' email is invaild').required('email is required'),
        password: Yup.string().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, and one special character').min(8, 'Password must be at least 8 characters long').required('Password is required'),

    });

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: submitRegister
    })



    return <>
        <div className='w-50 mx-auto py-5'>
            {error !== null ? <div className='alert alert-danger p-2'>{error}</div> : ''}
            <h3>Login Now</h3>
            <form onSubmit={formik.handleSubmit}>


                <label htmlFor="email">Email:</label>
                <input className='form-control' name='email' value={formik.values.email} id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> : ''}

                <label htmlFor="password">password:</label>
                <input className='form-control' name='password' value={formik.values.password} id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> : ''}


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
                    </button> : <div className='d-flex align-items-center'>
                        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white mt-2 me-2'>Login</button>
                        <Link className='btn pt-2' to={'/register'}>Register Now</Link>
                    </div>

                }


            </form>
        </div>

    </>
}


