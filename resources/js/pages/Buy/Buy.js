import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Buy(){
    return(
        <div className="container-fluid text-center">
                    <center> <b> COMPRAR COMO </b> </center>
                    <form className="form rounded-2 px-3 py-1 mt-4 mx-auto w-25 text-light">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    Guest
                                </div>
                                <div className="col-12">
                                    <Link to="/success" className="text-decoration-none">
                                    <button className="btn btn-sm px-4 w-75 py-2 bg-success">
                                        Guest
                                    </button>
                                    </Link>
                                </div>
                            </div> 
                             <div className="row mt-3">
                                <div className="col-12">
                                    <p>Registrate</p>
                                </div>
                                <div className="col-12">
                                    <button className="btn w-75 btn-sm px-4 py-2 bg-primary">
                                            Registrarme
                                    </button>
                                </div>
                            </div>   
                            </div>
                    </form>
        </div>
    )
}