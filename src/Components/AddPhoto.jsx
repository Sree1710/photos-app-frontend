import React, { useState } from 'react'
import Header from './Header'

const AddPhoto = () => {
  const [inputField,setInputField]=useState(
    {albumId:"",id:"",title:"",url:"",thumbnailUrl:""}
  )

  const inputHandler=(event)=>{
    setInputField({...inputField,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(inputField)
  }
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1>Add Photo</h1>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Album ID</label>
                <input onChange={inputHandler} type="text" className="form-control" name="albumId" value={inputField.albumId} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">ID</label>
                <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Title</label>
                <input onChange={inputHandler} type="text" className="form-control" name="title" value={inputField.title}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">URL</label>
                <input onChange={inputHandler} type="text" className="form-control" name="url" value={inputField.url}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Thumbnail URL</label>
                <input onChange={inputHandler} type="text" className="form-control" name="thumbnailUrl" value={inputField.thumbnailUrl}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPhoto