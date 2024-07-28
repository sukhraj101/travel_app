import React, { ReactNode } from 'react';

interface TextfieldProps {
  label: ReactNode;
  inputType: string;
  inputId: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  rows?: number;
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  error?: string;
}

const Textfieldsss: React.FC<TextfieldProps> = ({
  label,
  inputType,
  inputId,
  placeholder,
  value,
  onChange,
  labelClassName = "col-sm-3 control-label col-form-label",
  inputClassName = "form-control",
  containerClassName = "form-group row",
  rows = 4,
  autoComplete = 'on',
  disabled = false,
  error,
}) => {
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
            value={value}
            rows={rows}
            autoComplete={autoComplete}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <input
            type={inputType}
            className={inputClassName}
            id={inputId}
            placeholder={placeholder}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
            disabled={disabled}
          />
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
}

export default Textfield;
