import React, { useState, ChangeEvent, useEffect } from 'react';
import Popup from '../../../../components/common/admin/components/popup/index'; 
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { getRequest, postRequest } from '../../../../service';
 
interface Tags {
  id: number;
  name: string;  
}
 
interface FormFields { 
    translations: Translation[]; 
    tags:number[]
}
type Translation = {
    name: string; 
};
  
const TagSection: React.FC = ({
  handleTags
}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [records, setRecords] = useState<Tags>([]);
  const [tags, setTags] = useState<string[]>([]);
  const {  
    watch,
    reset,
    control,  
  } = useForm<FormFields>();

  const {
    fields: translationFields,
    append: appendTranslation,
    remove: removeTranslation,
  } = useFieldArray({
    control,
    name: "translations",
  });


  useEffect(() => {
    getTags();
  },[]);

  const getTags = () => {
  
      setLoading(true);
      getRequest(`v1/tags/listing`)
      .then((res) => {
        setRecords(res.data);
        setLoading(false);
      })
      .catch(() => alert("Error creating category"))
      .finally(() => {
        setLoading(false);
      }); 
  };


  const saveTags = () => {
    const data = watch('translations').filter((t) => t?.name === "");
    if(data?.length === 0){
      setLoading(true);
        postRequest(`v1/tags/store`, {
          translations:watch('translations')
        })
      .then((res) => {
        if (res.success) {
          alert("Vendor created successfully");
          getTags();
          reset();  
        }
      })
      .catch(() => alert("Error creating category"))
      .finally(() => {
        setLoading(false);
      });
    }else{
      setLoading(false);
    }
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

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const tag_array:string[] = tags;
      if (event?.target?.checked) {
        tag_array.push(value);
        setTags(tag_array);
        handleTags(tag_array);
      } else {
        const index = tag_array.filter(
          (t) => t !== value
        );
        setTags(index);
        handleTags(index);
      }
     
    };
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
            {records.map((checkbox:any) => (
                <div className="form-check" key={checkbox.id}>
                <input
                    type="checkbox"
                    id={checkbox.id}
                    className="form-check-input"
                    name="languages"
                    onChange={(e) => handleInputChange(e)}
                    value={checkbox.id}
                />
                <label className="form-check-label mb-0" htmlFor={checkbox.id}>
                    {checkbox.name}
                </label>
                </div>
            ))}
        </div>
        <button type="button" className="btn btn-primary btn-align-right" onClick={handleOpenModal}>
            Add new tag
        </button>
        {showModal && (
            <Popup title="Add New Tag" show={showModal} onClose={handleCloseModal} onSave={handleSaveChanges}>
             
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
                          {(translationFields.length == (index + 1)) ? (
                            <button className="btn btn-primary" type="button" onClick={()=>appendTranslation({name:""})}>+</button>
                          ) : (
                            <button className="btn btn-primary" type="button" onClick={()=>removeTranslation(index)}>-</button>
                          )}  
                        </div>
                      </div> 
                 ))}

                    <div className="modal-footer"> 
                      <button type="button" onClick={()=>saveTags()} className="btn btn-primary ">Save changes</button>
                    </div>
                
            </Popup>
        )}
    </>
  );
};

export default TagSection;
 
 
