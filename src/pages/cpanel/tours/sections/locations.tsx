import React, { useState, ChangeEvent } from 'react';
import Popup from '../../../../components/common/admin/components/popup/index'; 
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { postRequest } from '../../../../service';

interface CheckboxItem {
  id: string;
  label: string; 
  value: string;
}

const locationCheckboxes: CheckboxItem[] = [
    { id: 'customControlTag-9', label: 'New York', value: '1' },
    { id: 'customControlTag-10', label: 'Los Angeles', value: '2' },
    { id: 'customControlTag-11', label: 'Chicago', value: '1' },
    { id: 'customControlTag-12', label: 'Houston', value: '2' },
    { id: 'customControlTag-13', label: 'Phoenix', value: '1' },
    { id: 'customControlTag-14', label: 'Philadelphia', value: '2' },
    { id: 'customControlTag-15', label: 'San Antonio', value: '1' },
    { id: 'customControlTag-16', label: 'San Diego', value: '2' },
    { id: 'customControlTag-17', label: 'Dallas', value: '1' },
    { id: 'customControlTag-18', label: 'San Jose', value: '2' },
    { id: 'customControlTag-19', label: 'Austin', value: '1' },
    { id: 'customControlTag-20', label: 'Jacksonville', value: '2' },
    { id: 'customControlTag-21', label: 'Fort Worth', value: '1' },
    { id: 'customControlTag-22', label: 'Columbus', value: '2' },
    { id: 'customControlTag-23', label: 'Charlotte', value: '1' },
    { id: 'customControlTag-24', label: 'San Francisco', value: '2' },
];

interface FormFields { 
    translations: Translation[]; 
}
type Translation = {
    name: string; 
};
  
const Locations: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { 
    reset,
    control, 
    handleSubmit,  
  } = useForm<FormFields>();

  const {
    fields: translationFields,
    append: appendTranslation,
    remove: removeTranslation,
  } = useFieldArray({
    control,
    name: "translations",
  });

  const onSubmit: SubmitHandler<FormFields> = (data: any) => {
    console.log(data);
    setLoading(true);
    postRequest(`v1/vendor/store`, data)
      .then((res) => {
        if (res.success) {
          alert("Vendor created successfully");
          reset();
          window.location.href = "/cpanel/vendor/listing";
        }
      })
      .catch(() => setErrorMessage("Error creating category"))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleOpenModal = () => {
    appendTranslation({name:""});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
    setShowModal(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCheckboxes = locationCheckboxes.filter(checkbox =>
    checkbox.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const [fields, setFields] = useState<InputField[]>([{ id: Date.now(), value: '' }]);

  // const handleInputChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newFields = fields.map(field =>
  //     field.id === id ? { ...field, value: event.target.value } : field
  //   );
  //   setFields(newFields);
  // };

  // const handleAddField = () => {
  //   setFields([...fields, { id: Date.now(), value: '' }]);
  // };

  // const handleRemoveField = (id: number) => () => {
  //   setFields(fields.filter(field => field.id !== id));
  // };

  return (
    <>
      
        <input
            type="text"
            className="form-control"
            placeholder="Search tags here..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
        <div className="tags-wrap mb-2">
            {filteredCheckboxes.map(checkbox => (
                <div className="form-check" key={checkbox.id}>
                <input
                    type="checkbox"
                    id={checkbox.id}
                    className="form-check-input"
                    name="languages"
                    value={checkbox.value}
                />
                <label className="form-check-label mb-0" htmlFor={checkbox.id}>
                    {checkbox.label}
                </label>
                </div>
            ))}
        </div>
        <button type="button" className="btn btn-primary btn-align-right" onClick={handleOpenModal}>
            Add new tag
        </button>
        {showModal && (
            <Popup title="Add New Location" show={showModal} onClose={handleCloseModal} onSave={handleSaveChanges}>
              <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                   {translationFields.map((_field, index) => ( 
                      <div className="form-group row" key={index}>
                       
                        <div className="col-sm-10">
                          <Controller
                            control={control}
                            name={`translations.${index}.name` as const}
                            render={({ field }) => (
                              <input
                                {...field}
                                placeholder="Tag Name"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                        <div className="col-sm-2">
                          {(translationFields.length == (index + 1)) ? (
                            <button className="btn btn-primary" type="button" onClick={()=>appendTranslation({name:""})}>+</button>
                          ) : (
                            <button className="btn btn-primary" type="button" onClick={()=>removeTranslation(index)}>-</button>
                          )}  
                        </div>
                      </div> 
                 ))}

                    <div className="modal-footer"> 
                      <button type="submit" className="btn btn-primary ">Save changes</button>
                    </div>
                </form>
            </Popup>
        )}
    </>
  );
};

export default Locations;
function setErrorMessage(arg0: string): any {
  throw new Error('Function not implemented.');
}

