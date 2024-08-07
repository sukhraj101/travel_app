export default function AdminSettings() {
  return (
    <>
        <div className="container-fluid">
            <form className="form-horizontal">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="card-title mb-2">Admin Settings</h3>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="generalInfoTop"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTop" aria-expanded="true" aria-controls="collapseTop">General Info</button></h2>
                            <div id="collapseTop" className="accordion-collapse collapse show" aria-labelledby="generalInfoTop">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Allow creating new accounts</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enabled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Allow user deletion</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enabled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Allow invite vendors</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enabled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Allow Add Featured Tours</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enabled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Allow Subscribe Plans</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enabled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Membership</span></label>
                                        <div className="col-sm-9 align-self-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Anyone can register</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label"><span>Enable Languages</span></label>
                                        <div className="col-sm-6 align-self-center">
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="hindi" />
                                                        <label className="form-check-label" htmlFor="hindi">Hindi</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="english" />
                                                        <label className="form-check-label" htmlFor="english">English</label>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="russian" />
                                                        <label className="form-check-label" htmlFor="russian">Russian</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="spanish" />
                                                        <label className="form-check-label" htmlFor="spanish">Spanish</label>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-end gap-3">
                                            <button type="reset" className="btn btn-secondary text-white">Reset</button>
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="generalInfo0"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLang0" aria-expanded="true" aria-controls="collapseLang0">Admin Info </button></h2>
                            <div id="collapseLang0" className="accordion-collapse collapse show" aria-labelledby="generalInfo0">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="translations.0.name" className="col-sm-3 control-label col-form-label"><span>Admin User Name</span></label>
                                        <div className="col-sm-9"><input name="translations.0.name" placeholder="Admin User Name" className="form-control" value="superadmin" /></div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="translations.0.name" className="col-sm-3 control-label col-form-label"><span>Admin Email</span></label>
                                        <div className="col-sm-9"><input name="translations.0.name" placeholder="Admin Email" className="form-control" value="adminemail@domain.com" /></div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="translations.0.name" className="col-sm-3 control-label col-form-label"><span>Change Password</span></label>
                                        <div className="col-sm-9"><input name="translations.0.name" placeholder="current password" className="form-control" /></div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="translations.0.name" className="col-sm-3 control-label col-form-label"></label>
                                        <div className="col-sm-9"><input name="translations.0.name" placeholder="new password" className="form-control" /></div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="translations.0.name" className="col-sm-3 control-label col-form-label"></label>
                                        <div className="col-sm-9"><input name="translations.0.name" placeholder="new password" className="form-control" /></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-end gap-3">
                                            <button type="reset" className="btn btn-secondary text-white">Reset</button>
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-2">
                        <h3 className="card-title mb-2">Other Tour Details</h3>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="Timages"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#TimagesWrap" aria-expanded="true" aria-controls="TimagesWrap">Tour Images</button></h2>
                            <div id="TimagesWrap" className="accordion-collapse collapse show" aria-labelledby="Timages">
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="form-group mb-0"><label htmlFor="fileUpload">thumbnail</label><input type="file" id="fileUpload" accept="image/*" className="form-control"/></div>
                                        <input type="hidden" name="thumbnail" value="http://127.0.0.1:8000/vendors/1722543513M6S3F4642127.png"/>
                                        <div className="tour-banner">
                                        <div className="remove-image"></div>
                                        <img alt="Gallery Image 0" src="http://127.0.0.1:8000/vendors/1722543513M6S3F4642127.png"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="form-group mb-0"><label htmlFor="fileUpload">images</label><input type="file" id="fileUpload" accept="image/*" className="form-control"/></div>
                                        <input type="hidden" name="images" value=""/>
                                    </div>
                                    <div className="form-group row tour-gallery"></div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="category"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#categoryWrap" aria-expanded="true" aria-controls="categoryWrap">Category</button></h2>
                            <div id="categoryWrap" className="accordion-collapse collapse show" aria-labelledby="category">
                                <div className="card-body">
                                    <div className="form-check">
                                        <input type="checkbox" name="categories" className="form-check-input" id="customControlValidation-8" value="8"/><label className="form-check-label mb-0" htmlFor="customControlValidation-8">Tour &amp; Travels</label>
                                        <div className="col-md-12">
                                        <div className="form-check mt-2 mb-3">
                                            <input type="checkbox" className="form-check-input" id="customControlValidation-10" name="categories" value="10"/><label className="form-check-label mb-0" htmlFor="customControlValidation-10">Activities</label>
                                            <div className="form-check mt-2 mb-3"><input type="checkbox" id="customControlValidation-11" name="categories" className="form-check-input" value="11"/><label className="form-check-label mb-0" htmlFor="customControlValidation-11">naan</label></div>
                                        </div>
                                        <div className="form-check mt-2 mb-3"><input type="checkbox" className="form-check-input" id="customControlValidation-9" name="categories" value="9"/><label className="form-check-label mb-0" htmlFor="customControlValidation-9">Events</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="language"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#languageWrap" aria-expanded="true" aria-controls="languageWrap">Language Translations</button></h2>
                            <div id="languageWrap" className="accordion-collapse collapse" aria-labelledby="language">
                                <div className="card-body">
                                    <div className="form-check"><input type="checkbox" id="customControlValidation-1" className="form-check-input" name="languages" value="1"/><label className="form-check-label mb-0" htmlFor="customControlValidation-1">English</label></div>
                                    <div className="form-check"><input type="checkbox" id="customControlValidation-2" className="form-check-input" name="languages" value="2"/><label className="form-check-label mb-0" htmlFor="customControlValidation-2">Hindi</label></div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="tags"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsWrap" aria-expanded="true" aria-controls="tagsWrap">Tags</button></h2>
                            <div id="tagsWrap" className="accordion-collapse collapse show" aria-labelledby="tags">
                                <div className="card-body">
                                    <input type="text" className="form-control" placeholder="Search tags here..." value=""/>
                                    <div className="tags-wrap mb-2">
                                        <div className="form-check"><input type="checkbox" id="7" className="form-check-input" name="tags" value="7"/><label className="form-check-label mb-0" htmlFor="7">asas</label></div>
                                        <div className="form-check"><input type="checkbox" id="2" className="form-check-input" name="tags" value="2"/><label className="form-check-label mb-0" htmlFor="2">Beach</label></div>
                                        <div className="form-check"><input type="checkbox" id="6" className="form-check-input" name="tags" value="6"/><label className="form-check-label mb-0" htmlFor="6">Fun</label></div>
                                        <div className="form-check"><input type="checkbox" id="1" className="form-check-input" name="tags" value="1"/><label className="form-check-label mb-0" htmlFor="1">Honeymoon</label></div>
                                        <div className="form-check"><input type="checkbox" id="3" className="form-check-input" name="tags" value="3"/><label className="form-check-label mb-0" htmlFor="3">Nature</label></div>
                                        <div className="form-check"><input type="checkbox" id="4" className="form-check-input" name="tags" value="4"/><label className="form-check-label mb-0" htmlFor="4">Peace</label></div>
                                        <div className="form-check"><input type="checkbox" id="5" className="form-check-input" name="tags" value="5"/><label className="form-check-label mb-0" htmlFor="5">Snow</label></div>
                                        <div className="form-check"><input type="checkbox" id="8" className="form-check-input" name="tags" value="8"/><label className="form-check-label mb-0" htmlFor="8">test</label></div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-align-right">Add new</button>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="includes"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">Included</button></h2>
                            <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                                <div className="card-body">
                                    <input type="text" className="form-control" placeholder="Search tags here..." value=""/>
                                    <div className="tags-wrap mb-2">
                                        <div className="form-check"><input type="checkbox" id="13" className="form-check-input" name="included" value="13"/><label className="form-check-label mb-0" htmlFor="13">Included</label></div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-align-right">Add new</button>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="includes"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">Excluded</button></h2>
                            <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                                <div className="card-body">
                                    <input type="text" className="form-control" placeholder="Search tags here..." value=""/>
                                    <div className="tags-wrap mb-2">
                                        <div className="form-check"><input type="checkbox" id="10" className="form-check-input" name="excluded" value="10"/><label className="form-check-label mb-0" htmlFor="10">Excluded 1</label></div>
                                        <div className="form-check"><input type="checkbox" id="11" className="form-check-input" name="excluded" value="11"/><label className="form-check-label mb-0" htmlFor="11">Excluded 2</label></div>
                                        <div className="form-check"><input type="checkbox" id="12" className="form-check-input" name="excluded" value="12"/><label className="form-check-label mb-0" htmlFor="12">Excluded 2</label></div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-align-right">Add new</button>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="locations"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#locationsWrap" aria-expanded="true" aria-controls="locationsWrap">Pickup Locations</button></h2>
                            <div id="locationsWrap" className="accordion-collapse collapse show" aria-labelledby="locations">
                                <div className="card-body">
                                    <input type="text" className="form-control" placeholder="Search tags here..." value=""/>
                                    <div className="tags-wrap mb-2">
                                        <div className="form-check"><input type="checkbox" id="1" className="form-check-input" value="1"/><label className="form-check-label mb-0" htmlFor="1">aass</label></div>
                                        <div className="form-check"><input type="checkbox" id="2" className="form-check-input" value="2"/><label className="form-check-label mb-0" htmlFor="2">Sector 43, Bust Stand</label></div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-align-right">Add new</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </form>
        </div>
    </>
  )
}
