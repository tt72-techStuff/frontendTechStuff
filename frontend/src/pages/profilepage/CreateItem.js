//NEEDS STYLING
//NEEDS REFACTORING

//imports
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components';

//formSchema
const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    image_url: yup.string().required("Image url is required"),
    category: yup.string().required("Category is required"),
})

const CreateItem = props => {

    const initialData = {
        name: "",
        image_url: "",
        category: ""
    }

    const [data, setData] = useState([initialData]);
    const [formState, setFormState] = useState(initialData);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //disable submit unless proper fields are filled
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
            if (formState.category === "null")
                setButtonDisabled(true);
        });
    }, [formState]);

    //errorState
    const [errorState, setErrorState] = useState({
        name: "",
        image_url: "",
        category: ""
    });

    //formSubmit
    const formSubmit = (e) => {
        e.preventDefault(); //don't reload when we submit
        console.log("Form submitted!");
        axios
            .post("https://reqres.in/api/electronics", formState)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.log(err))
    }

    //validation
    const validate = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value; //checkbox validation
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({ ...errorState, [e.target.name]: "" })
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    //inputChange
    const inputChange = (e) => {
        e.persist(); //don't reload when input is changed
        validate(e);

        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value; //checkbox input
        setFormState({ ...formState, [e.target.name]: value });
    }

    return (
        <StyledDiv className="form-container">
            <h1>Add Your Electronic</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Item Name:
                        <StyledInput name='name' type='text' value={formState.name} onChange={inputChange} />
                </label>
                {errorState.name ? <span className="error">{errorState.name}</span> : null}
                <label htmlFor="image_url">
                    Item Image URL:
                        <StyledInput name='image_url' type='text' value={formState.image_url} onChange={inputChange} />
                </label>
                {errorState.image_url ? <span className="error">{errorState.image_url}</span> : null}
                <label htmlFor="categories">
                    Category:
                    <StyledSelect name="category" id="category" value={formState.category} onChange={inputChange}>
                        <option defaultValue value="null">--pick a category--</option>
                        <option value="computers">Computers</option>
                        <option value="video">Video</option>
                        <option value="audio">Audio</option>
                        <option value="gaming">Gaming</option>
                    </StyledSelect>
                </label>
                <button disabled={buttonDisabled}>Submit</button>
            </form>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

`
const StyledSelect = styled.select`

`
const StyledInput = styled.input`

`

export default CreateItem;