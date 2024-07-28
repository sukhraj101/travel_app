import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldValues, RegisterOptions, UseFormRegister, FieldError } from 'react-hook-form';

interface FormInputTextProps<T extends FieldValues> {
  label: string;
  name: keyof T;
  register: UseFormRegister<T>;
  errors: Record<string, FieldError> | undefined;
  placeholder?: string;
}

const FormInputText = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  placeholder = ''
}: FormInputTextProps<T>) => {
  return (
    <Form.Group className="mb-3" controlId={`formGroup${String(name)}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        {...register(name as string, { required: "This field is required" } as RegisterOptions)}
        placeholder={placeholder}
      />
      {errors?.[name as string] && (
        <p className='text-danger text-right'>{errors[name as string]?.message}</p>
      )}
    </Form.Group>
  );
};

export default FormInputText;
