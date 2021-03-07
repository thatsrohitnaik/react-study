import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Error from "../../Components/Error/";
import { AppContext } from "../../Context/AppContext";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const SignUp = (props) => {

    const { register, handleSubmit, errors, formState, getValues, reset } = useForm({ defaultValues: { firstname: "rohitttt" } }); // initialize the hook
    const onSubmit = (data) => {
        reset({ firstname: "rohitttt" })
    };
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        const values = getValues();
    }, [formState])

    const t = useContext(AppContext);

    useEffect(() => {
    }, [reset])

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="title">{t("title")}</label>
                <select
                    id="title"
                    name="title"
                    ref={register({ required: true })}>
                     <option value="Mr">Mr</option>
                     <option value="Mrs">Mrs</option>
                     <option value="Miss">Miss</option>
                     <option value="Dr">Dr</option>
                </select>


    <label htmlFor="fname">{t("name")}</label>

                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    ref={register({ required: true })} />

                <Error
                    isError={errors.fname}
                    error="First name is required."/>

                <label htmlFor="lastname">{t("surname")}</label>

                <input
                    id="lastname"
                    name="lastname"
                    type="text" id="fname"
                    ref={register({ required: true })} />

                <Error
                    isError={errors.lastname}
                    error="Last name is required."/>

                <label htmlFor="age">{t("age")}</label>

                <input
                    type="text"
                    id="age"
                    name="age"
                    ref={register({ required: true, pattern: /\d+/ })} />

                <Error
                    isError={errors.age}
                    error="Please enter number for age."/>

                <label htmlFor="email">Email</label>

                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })} />

                <Error
                    isError={errors.email}
                    error="Please enter valid email."/>

                <label htmlFor="mobile">{t("mobileNo")}</label>

                <input
                    type="tel"
                    placeholder="Mobile number"
                    id="mobile"
                    name="mobile"
                    ref={register({ required: true, minLength: 6, maxLength: 12 })} />

                <Error
                    isError={errors.mobile}
                    error="We would need your number in case the code is on fire."/>
                
                <div>
                <label>{t("hungry")}</label>
                    <br />
                    <label htmlFor="hung1">Yes</label>
                    <input
                        id="hung1"
                        name="hungry"
                        type="radio"
                        value="yes"
                        ref={register({ required: true })} />

                    <label htmlFor="hung2">No</label>
                    <input
                        id="hung2"
                        name="hungry"
                        value="no"
                        type="radio"
                        ref={register({ required: true })} />
                        <br/>
                        <br />
                <Error
                    isError={errors.hungry}
                    error="We would buy you food if you are hungry and will arange for coffee too."/>
            
                </div>
                <br />
                <div className="datePicker">
                    <DatePicker
                        id="dob"
                        selected={startDate}
                        showYearDropdown
                        ref={register}
                        onChange={date => setStartDate(date)} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SignUp;