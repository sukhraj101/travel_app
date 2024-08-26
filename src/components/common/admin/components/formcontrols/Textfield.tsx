import { ReactNode, forwardRef, ForwardedRef } from 'react';
import { UseFormRegister, FieldValues, RegisterOptions, Path } from 'react-hook-form';

interface TextfieldProps<T extends FieldValues> {
  label: ReactNode;
  inputType: 'text' | 'email' | 'password' | 'number' | 'textarea';
  inputId: string;
  placeholder?: string;
  value?: string | number;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  rows?: number;
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  error?: string;
  register?: UseFormRegister<T>;
  name?: Path<T>;
}

const Textfield = <T extends FieldValues>(
  {
    label,
    inputType,
    inputId,
    placeholder,
    value,
    // onChange,
    labelClassName = "col-sm-3 control-label col-form-label",
    inputClassName = "form-control",
    containerClassName = "form-group row",
    rows = 4,
    autoComplete = 'on',
    disabled = false,
    error,
    register,
    name
  }: TextfieldProps<T>,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={inputId} className={labelClassName}>
        {typeof label === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: label }} />
        ) : (
          label
        )}
      </label>
      <div className="col-sm-9">
        {inputType === 'textarea' ? (
          <textarea
            id={inputId}
            className={inputClassName}
            placeholder={placeholder}
            value={value as string} // `value` should be string for textarea
            rows={rows}
            autoComplete={autoComplete}
            // onChange={onChange}
            disabled={disabled}
            {...(register && name ? register(name, { required: 'Business Name is required' } as RegisterOptions<T>) : {})}
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
          />
        ) : (
          <input
            type={inputType}
            className={inputClassName}
            id={inputId}
            placeholder={placeholder}
            value={value as string} // `value` should be string for input
            autoComplete={autoComplete}
            // onChange={onChange}
            disabled={disabled}
            {...(register && name ? register(name, { required: 'Business Name is required' } as RegisterOptions<T>) : {})}
            ref={ref as ForwardedRef<HTMLInputElement>}
          />
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

const ForwardedTextfield = forwardRef(Textfield);
ForwardedTextfield.displayName = 'Textfield';

export default ForwardedTextfield;
