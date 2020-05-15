import React from "react";
import { Link } from "react-router-dom";
import "./SocioFormPage.scss";
import SocioForm from "../../components/SocioForm/SocioForm";

const state = { 
    loading: false,
    error: null,
    form: {
        firstName: '',
        LastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }
};

const handleChange = event => {
    this.setState({
        form: {
            ...this.state.form,
            [event.target.name]: event.target.value,
        }
    })
}

const handleSubmit = async event => {
    event.preventDefault()
    this.setState({ loading: true, error: null })

    try {
        // await api.badges.create(this.state.form);
        this.setState({ loading: false })

        this.props.history.push('/badges');
    } catch(error) {
        this.setState({ loading: false, error: error })
    }
}

function SocioFormPage() {
    return (
        <SocioForm 
        onChange={handleChange}
        onSubmit={handleSubmit}
        formValue={state.form}
        error={state.error}
        />
    );
}

export default SocioFormPage;