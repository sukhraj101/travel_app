import React, { useState, ChangeEvent, useEffect } from 'react';
import Popup from '../../../../components/common/admin/components/popup/index';
import { Controller, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import { getRequest, postRequest } from '../../../../service';

interface Tags {
  id: number;
  name: string;
}

interface FormFields {
  translations: Translation[];
  tags: number[];
}

type Translation = {
  name: string;
};

interface TagSectionProps { 
  type: string;
  name: 'tags' | `translations.${number}`;
  register: UseFormRegister<FormFields>;
}

const TagSection: React.FC<TagSectionProps> = ({register, type,name }) => {
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [records, setRecords] = useState<Tags[]>([]) 
  const { watch, reset, control } = useForm<FormFields>()

  console.log(loading)

  const {
    fields: translationFields,
    append: appendTranslation,
    remove: removeTranslation,
  } = useFieldArray({
    control,
    name: 'translations',
  });

  useEffect(() => {
    getTags();
  }, []);

  const getTags = () => {
    setLoading(true);
    getRequest(`v1/tags/listing?type=${type}`)
      .then((res) => {
        setRecords(res.data);
        setLoading(false);
      })
      .catch(() => alert('Error fetching tags'))
      .finally(() => {
        setLoading(false);
      });
  };

  const saveTags = () => {
    const data = watch('translations').filter((t) => t?.name === '');
    if (data?.length === 0) {
      setLoading(true);
      postRequest(`v1/tags/store`, {
        translations: watch('translations'),
        type: type,
      })
        .then((res) => {
          if (res.success) {
            alert('Tags created successfully');
            getTags();
            reset();
          }
        })
        .catch(() => alert('Error creating tags'))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    appendTranslation({ name: '' });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    saveTags();
    setShowModal(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecords = records && records?.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredRecords.map((checkbox) => (
          <div className="form-check" key={checkbox.id}>
            <input
              type="checkbox"
              id={checkbox.id.toString()}
              className="form-check-input"
              {...register(name)}
              value={checkbox.id}
            />
            <label className="form-check-label mb-0" htmlFor={checkbox.id.toString()}>
              {checkbox.name}
            </label>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-primary btn-align-right" onClick={handleOpenModal}>
        Add new
      </button>
      {showModal && (
        <Popup title={`Add New ${type}`} show={showModal} onClose={handleCloseModal} onSave={handleSaveChanges}>
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
                      required
                    />
                  )}
                />
              </div>
              <div className="col-sm-2">
                {translationFields.length === index + 1 ? (
                  <button className="btn btn-primary" type="button" onClick={() => appendTranslation({ name: '' })}>
                    +
                  </button>
                ) : (
                  <button className="btn btn-primary" type="button" onClick={() => removeTranslation(index)}>
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="modal-footer">
            <button type="button" onClick={handleSaveChanges} className="btn btn-primary">
              Save changes
            </button>
          </div>
        </Popup>
      )}
    </>
  );
};

export default TagSection;
