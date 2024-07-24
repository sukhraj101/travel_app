import React from 'react';

interface TextfieldAddMoreProps {
  inputType: string;
  inputClassName?: string;
  inputPlaceholder?: string;
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  containerClassName?: string;
  isLast: boolean;
  onAdd: () => void;
  isOnly: boolean;
}

const TextfieldAddMore: React.FC<TextfieldAddMoreProps> = ({
  inputType,
  inputClassName = "form-control",
  inputPlaceholder = "",
  inputValue,
  onInputChange,
  onRemove,
  containerClassName = "input-group mt-3 mb-3",
  isLast,
  onAdd,
  isOnly
}) => {
  return (
    <div className={containerClassName}>
      <input
        type={inputType}
        className={inputClassName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onInputChange}
      />
      {!isOnly && (
        <div className="input-group-append">
          <span className="input-group-text h-100" onClick={onRemove}>
            <i className="mdi mdi-minus"></i>
          </span>
        </div>
      )}
      {isLast && (
        <div className="input-group-append float-right" onClick={onAdd}>
          <span className="input-group-text h-100">
            <i className="mdi mdi-plus"></i>
          </span>
        </div>
      )}
    </div>
  );
}

export default TextfieldAddMore;
