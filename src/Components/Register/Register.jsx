import { Formik, useFormik } from 'formik';
import react from 'react';
import * as Yup from 'yup';

export default function Register() {

    function validate(values){
        
        let phoneRegex = /\+?(\d{1,3})?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})/
        let errors = {};

        if (!values.name){
            errors.name = "name is required"
        }
        else if(values.name.length < 3){
            errors.name = "name minlength is 3"
        }
        
        else if(values.name.length > 11){
            errors.name = "name maxlength is 11"
        }

        if (!values.phone){
            errors.phone = "phone is required"
        }
        else if(!phoneRegex.test(values.phone))
        {
            errors.phone = "phone is invalid"
        }


        return errors;
    }
    
    function submitRegister(values) {
        console.log(values);
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        }, validate,
        onSubmit: submitRegister
    })



    return <>
        <div className='w-75 mx-auto py-5'>

            <h3>Register Now</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input className='form-control' name='name' value={formik.values.name} id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className='alert alert-danger p-2 mt-2'>{formik.errors.name}</div>
                
                <label htmlFor="email">Email:</label>
                <input className='form-control' name='email' value={formik.values.email} id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="phone">phone:</label>
                <input className='form-control' name='phone' value={formik.values.phone} id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className='alert alert-danger p-2 mt-2'>{formik.errors.phone}</div>

                <label htmlFor="password">password::</label>
                <input className='form-control' name='password' value={formik.values.password} id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="rePassword">rePassword:</label>
                <input className='form-control' name='rePassword' value={formik.values.rePassword} id='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <button type='submit' className='btn bg-main text-white mt-2'>Register</button>
            </form>
        </div>

    </>
}

