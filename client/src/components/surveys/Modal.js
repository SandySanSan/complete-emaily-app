import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Modal extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal);
    }

    render() {
        const { title, dateSent, id, handleDelete } = this.props;
        return (
            <div>
                <button
                    className='btn-small red darken-1 modal-trigger right'
                    data-target={id}>
                    <i className='material-icons right'>delete_forever</i>
                    Delete
                </button>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id={id}
                    className='modal'>
                    <div className='modal-content'>
                        <h4 className='red-text'>Delete survey</h4>
                        <p>Are you sure to delete this survey ? </p>
                        <h6>Title : {title}</h6>
                        <h6>
                            Sent : {new Date(dateSent).toLocaleDateString()}
                        </h6>
                    </div>
                    <div className='modal-footer'>
                        <button className='modal-close grey lighten-2 btn-flat left'>
                            Cancel
                        </button>
                        <button
                            className='right btn-small red darken-1 modal-close'
                            onClick={() => handleDelete(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
