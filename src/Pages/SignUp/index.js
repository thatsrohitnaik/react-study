import React from "react";
import { useForm } from "react-hook-form";

const SignUp = (props) => {

    const { register, handleSubmit, errors, formState } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data, "dd", formState);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name="firstname"
                ref={register} />

            <input
                name="lastname"
                ref={register({ required: true })} />

            {errors.lastname && 'Last name is required.'}

            <input
                name="age"
                ref={register({ pattern: /\d+/ })} />

            {errors.age && 'Please enter number for age.'}

            <input type="submit" />
            <p>okkk</p>
        </form>
    );
}

export default SignUp;