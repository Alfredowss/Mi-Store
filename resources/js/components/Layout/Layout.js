import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Modal from '../Modal/Modal'
import {Context} from '../../store/Store'
import './index.css'

export default function Layout({children}){

    const [state, dispatch] = useContext(Context)

    const cmStyles= {
        fontWeight: 'bolder'
    }

    const [localState, setState] = useState({modalIsOpen: false})

    const handlerModal = ()=>{
        let a = (localState.modalIsOpen) ? false : true
        setState({modalIsOpen: a})
    }

    const handlerCheck = ()=>{
        if(state.target!=null){
            return alert('Ya tienes una targeta registrada')
        }else{
            handlerModal()
        }
    }

    return(
        <>
            <nav className="navbar  navbar-expand-lg navbar-light bg-light m-0  px-0 py-4">
                <div className="container-fluid p-0">
                    <div className="row w-100 mx-auto">
                        <div className="col p-0">
                            <span className="d-block h-100 d-flex align-items-center">Mexico city</span>
                        </div>
                        
                        <div className="col p-0 text-center">
                            <span className="fw-bolder navbar-brand fs-3 m-0" href="#" style={cmStyles} >
                                <Link className="text-decoration-none text-dark" to="/"> MI STORE</Link>
                            </span>
                        </div>
                        
                        <div className="col p-0 d-flex justify-content-end align-items-center">
                                <Link to="/car" className="text-decoration-none text-light badge badge-primary py-2 px-4 list-inline-item">
                                        Car
                                </Link>
                                <span className="badge badge-dark py-2 px-4 list-inline-item" onClick={handlerCheck}>Add Target</span>
                        </div>
                    </div>
                </div>    
            </nav>

            {children}

            {(localState.modalIsOpen && <Modal/>) ?
                ReactDOM.createPortal(<Modal handlerModal={handlerModal}/>, document.getElementById('modal'))
            : ''}

        </>
    )
}
