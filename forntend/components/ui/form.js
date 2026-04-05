'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Controller, FormProvider, useFormContext, useFormState, } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
const Form= FormProvider;
const FormFieldContext= React.createContext({});
const FormField= ({ ...props })=> {
    return (_jsx(FormFieldContext.Provider, { value, children: _jsx(Controller, { ...props }) }));
};
const useFormField= ()=> {
    const fieldContext= React.useContext(FormFieldContext);
    const itemContext= React.useContext(FormItemContext);
    const { getFieldState }= useFormContext();
    const formState= useFormState({ name);
    const fieldState= getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }
    const { id }= itemContext;
    return {
        id,
        name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const FormItemContext= React.createContext({});
function FormItem({ className, ...props }) {
    const id= React.useId();
    return (_jsx(FormItemContext.Provider, { value, children: _jsx("div", { "data-slot": "form-item", className: cn('grid gap-2', className), ...props }) }));
}
function FormLabel({ className, ...props }) {
    const { error, formItemId }= useFormField();
    return (_jsx(Label, { "data-slot": "form-label", "data-error": !!error, className: cn('data-[error=true]:text-destructive', className), htmlFor, ...props }));
}
function FormControl({ ...props }) {
    const { error, formItemId, formDescriptionId, formMessageId }= useFormField();
    return (_jsx(Slot, { "data-slot": "form-control", id, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId }= useFormField();
    return (_jsx("p", { "data-slot": "form-description", id, className: cn('text-muted-foreground text-sm', className), ...props }));
}
function FormMessage({ className, ...props }) {
    const { error, formMessageId }= useFormField();
    const body= error ? String(error?.message ?? '') ;
    if (!body) {
        return null;
    }
    return (_jsx("p", { "data-slot": "form-message", id, className: cn('text-destructive text-sm', className), ...props, children));
}
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
