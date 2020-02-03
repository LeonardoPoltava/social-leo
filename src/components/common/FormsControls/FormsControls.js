import React from "react";
import "./FormsControls.css";
import {Field} from "redux-form";
const FormControl = ({input, meta: {error, touched}, children, ...props} ) => {
    const hasError = error && touched;
    return (
        <div className={"form-control " + (hasError ? "error" : "")}>
            {children}
            {hasError && <span className={"error-span"}>{error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta,  ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};
export const Input = (props) => {
    const {input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};
export const customField = (placeholder, name, validators, component, fieldClass, props  = {}) => (
    <Field component={component} validate={validators} name={name} placeholder={placeholder} className={fieldClass} {...props} />
);