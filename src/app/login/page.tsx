"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from 'react-bootstrap/Form';
import cls from "./style.module.scss"
import { Button } from 'react-bootstrap';
import { LoginTypes } from '@/interfaces';
import FormInput, { FormInputProps } from '@/components/form-input/form-input';

interface PageProps { }

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    streetName: yup.string().required("Street is required"),
    cityName: yup.string().required("City is required"),
    stateName: yup.string().required("State is required"),
    countryName: yup.string().required("Country is required"),
});

const Page: React.FC<PageProps> = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data: LoginTypes) => {
        console.log({ data });
        reset();
    };

    const inputs: FormInputProps[] = [
        {
            controlName: "name",
            placeholder: "John Maker",
            hookformSettings: { ...register("name") },
            errorMessage: errors.name?.message,
            label: "Shipping Name",
        },
        {
            controlName: "streetName",
            placeholder: "123 Plae Grond Stret",
            hookformSettings: { ...register("streetName") },
            errorMessage: errors.streetName?.message,
            label: "Street Name",
        },
        {
            controlName: "cityName",
            placeholder: "Vermont",
            hookformSettings: { ...register("cityName") },
            errorMessage: errors.cityName?.message,
            label: "City",
        },
        {
            controlName: "stateName",
            placeholder: "California",
            hookformSettings: { ...register("stateName") },
            errorMessage: errors.stateName?.message,
            label: "State / Province",
        },
        {
            controlName: "countryName",
            placeholder: "United States of America",
            hookformSettings: { ...register("countryName") },
            errorMessage: errors.countryName?.message,
            label: "Country",
        },
    ]


    return (
        <div className={cls.wrapper}>
            <Form onSubmit={handleSubmit(onSubmitHandler)} className={cls.content}>
                {inputs.map(item => (
                    <FormInput {...item} />
                ))}
                <Button type="submit" variant='dark'>Login</Button>
            </Form>
        </div>
    )
}

export default Page;