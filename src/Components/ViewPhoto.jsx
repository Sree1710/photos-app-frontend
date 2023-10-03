import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewPhoto = () => {
    const [photoData, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Photo</h1>
                        </div>
                        {isLoading ? <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">
                            {photoData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card">
                                            <img height="300px" src={value.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">{value.albumId}</p>
                                                <p className="card-text">{value.id}</p>
                                                <p className="card-text">{value.title}</p>
                                                <p className="card-text">{value.thumbnailUrl}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPhoto