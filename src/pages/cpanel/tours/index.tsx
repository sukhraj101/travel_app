import React, { useState } from 'react'

import './index.css'

import image1 from "./../../../../public/images/1.png"
import image2 from "./../../../../public/images/2.jpg"
import image3 from "./../../../../public/images/3.jpg"
import image4 from "./../../../../public/images/4.jpg"
import Textfield from '../../../components/common/admin/components/formcontrols/Textfield'
import SelectField from '../../../components/common/admin/components/formcontrols/SelectField' 
import TextfieldAddMore from '../../../components/common/admin/components/formcontrols/TextfieldAddMore'

const CreateTour = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [companyValue, setCompanyValue] = useState('')
    const [contactValue, setContactValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const [startDate, setStartDate] = useState('')


    const [selectedValue, setSelectedValue] = useState<string>('');
    const options = [
        { label: 'Alaskan/Hawaiian Time Zone', options: [
          { value: 'AK', label: 'Alaska' },
          { value: 'HI', label: 'Hawaii' },
        ]},
        { label: 'Pacific Time Zone', options: [
          { value: 'CA', label: 'California' },
          { value: 'NV', label: 'Nevada' },
        ]}
    ]
    // const options = [
    //     { value: 'CA', label: 'California' },
    //     { value: 'NV', label: 'Nevada' },
    //     { value: 'OR', label: 'Oregon' },
    // ]


    const [fields, setFields] = useState([{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }]);

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFields = fields.slice();
        newFields[index].value = event.target.value;
        setFields(newFields);
    }

    const handleAddField = () => {
        setFields([...fields, { id: fields.length + 1, value: '' }]);
    }

    const handleRemoveField = (index: number) => () => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    }

  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <form className="form-horizontal">
                  <div className="card-body">
                    <h4 className="card-title">Personal Info</h4>
                    <Textfield 
                        label="First Name" 
                        inputType="text" 
                        inputId="fname" 
                        placeholder="First Name Here"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Textfield 
                        label="Last Name" 
                        inputType="text" 
                        inputId="lname" 
                        placeholder="Last Name Here"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Textfield 
                        label="Email" 
                        inputType="email" 
                        inputId="email" 
                        placeholder="Email Address Here"
                        value={emailValue}
                        autoComplete="off"
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <Textfield 
                        label="Password" 
                        inputType="password" 
                        inputId="password" 
                        placeholder="Password Here"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    <Textfield 
                        label="Company" 
                        inputType="text" 
                        inputId="company" 
                        placeholder="Company Name Here"
                        value={companyValue}
                        onChange={(e) => setCompanyValue(e.target.value)}
                    />
                    <Textfield 
                        label="Contact No" 
                        inputType="text" 
                        inputId="contact" 
                        placeholder="Contact No Here"
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                    />
                    <Textfield 
                        label="Message" 
                        inputType="textarea" 
                        rows={4}
                        inputId="message" 
                        placeholder="Message Here"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Form Elements</h5>
                    <SelectField
                        label="Select State"
                        options={options}
                        selectedValue={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                    />
                    <Textfield 
                        label="Start Date <span>(mm/dd/yyyy)</span>" 
                        inputType="date"
                        inputId="startdate" 
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <Textfield 
                        label="Disabled input" 
                        inputType="text"
                        inputId="disabled" 
                        placeholder="Disabled input"
                        disabled={true}
                    />


                    <h5 className="card-title mt-5 mb-3">Included with the plan:</h5>
                    {fields.map((field, index) => (
                        <TextfieldAddMore
                        key={field.id}
                        inputType="text"
                        inputClassName="form-control"
                        inputPlaceholder="Enter value"
                        inputValue={field.value}
                        onInputChange={handleInputChange(index)}
                        onRemove={handleRemoveField(index)}
                        isLast={index === fields.length - 1}
                        onAdd={handleAddField}
                        isOnly={fields.length === 1}
                        />
                    ))}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Forms Control</h4>
                  <div className="row mb-3 align-items-center">
                    <div className="col-lg-3 col-md-12">
                      <span className="text-success">Input with Sccess</span>
                    </div>
                    <div className="col-lg-9 col-md-12">
                      <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                      />
                      <div className="valid-feedback">Woohoo!</div>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <div className="col-lg-3 col-md-12">
                      <span className="text-danger">Input with Error</span>
                    </div>
                    <div className="col-lg-9 col-md-12">
                      <input
                        type="text"
                        className="form-control is-invalid"
                        id="validationServer01"
                      />
                      <div className="invalid-feedback">
                        Please correct the error
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-h-100">
                <div className="card-body right-aside">
                  <h5 className="card-title">Other Tour Details</h5>
                  <div className="form-group row tour-gallery">
                    <div className="col-md-3">
                        <img src={image1} alt="Other Tour Details" />
                    </div>
                    <div className="col-md-3">
                        <img src={image2} alt="Other Tour Details" />
                    </div>
                    <div className="col-md-3">
                        <img src={image3} alt="Other Tour Details" />
                    </div>
                    <div className="col-md-3">
                        <img src={image4} alt="Other Tour Details" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <h6>File Upload</h6>
                    <div className="col-md-9">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="validatedCustomFile"
                          >Choose file...</label
                        >
                        <div className="invalid-feedback">
                          Example invalid custom file feedback
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <h6>Category</h6>
                    <div className="col-md-12">
                      <div className="form-check mr-sm-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlAutosizing1"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlAutosizing1"
                          >First One</label
                        >
                      </div>
                      <div className="form-check mr-sm-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlAutosizing2"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlAutosizing2"
                          >Second One</label
                        >
                      </div>
                      <div className="form-check mr-sm-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlAutosizing3"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlAutosizing3"
                          >Third One</label
                        >
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <h6>Facilities</h6>
                    <div className="col-md-12">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="customControlValidation1"
                          name="radio-stacked"
                          required
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlValidation1"
                          >First One</label
                        >
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="customControlValidation2"
                          name="radio-stacked"
                          required
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlValidation2"
                          >Second One</label
                        >
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="customControlValidation3"
                          name="radio-stacked"
                          required
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="customControlValidation3"
                          >Third One</label
                        >
                      </div>
                    </div>
                  </div>

                    <div className="row right-aside-btns">
                        <div className="col-md-12 d-flex justify-content-end gap-3">
                            <button type="submit" className="btn btn-danger text-white">Cancel</button>
                            <button type="submit" className="btn btn-success text-white">Reset</button>
                            <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>


          {/* <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-end gap-3">
                <button type="submit" className="btn btn-danger text-white">Cancel</button>
                <button type="submit" className="btn btn-success text-white">Reset</button>
                <button type="button" className="btn btn-primary">Save Changes</button>
            </div>
          </div> */}


        </div>
    </>
  )
}

export default CreateTour;