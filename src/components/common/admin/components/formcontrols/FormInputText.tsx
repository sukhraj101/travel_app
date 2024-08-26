 
 
import { FieldValues, Path, UseFormRegister, FieldError } from 'react-hook-form'; 

interface FormInputTextProps<T extends FieldValues> {
  label: string;
  name: Path<T>; // Use Path<T> instead of keyof T for type-safe form fields
  register: UseFormRegister<T>;
  errors?: Partial<Record<Path<T>, FieldError>>; // Adjusted to use Path<T>
  placeholder?: string;
}

const FormInputText = <T extends FieldValues>({
  label,
  name,
  register,
  errors = {},
  placeholder = '',
}: FormInputTextProps<T>) => {
  return (
    <div className="mb-3 form-group" id={`formGroup${String(name)}`}>
      <label>{label}</label>
      <input className='form-control'
        type="text"
        {...register(name, { required: 'This field is required' })}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-danger text-right">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FormInputText;
