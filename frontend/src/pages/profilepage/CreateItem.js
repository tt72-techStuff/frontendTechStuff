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
    information: yup.string()
})

const CreateItem = props => {

    const initialData = {
        name: "",
        image_url: "",
        category: "",
        information: ""
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
        setFormState(initialData); //reset fields after we submit
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
            <h1 className="create-item-title">Add Your Electronic</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    <h1>
                        Item Name
                    </h1>
                    <StyledInput name='name' type='text' value={formState.name} onChange={inputChange} />
                </label>
                {errorState.name ? <span className="error">{errorState.name}</span> : null}
                <label htmlFor="image_url">
                    <h1>
                        Image URL
                    </h1>
                    <StyledInput name='image_url' type='text' value={formState.image_url} onChange={inputChange} />
                </label>
                {errorState.image_url ? <span className="error">{errorState.image_url}</span> : null}
                <label htmlFor="categories">
                    <h1>
                        Category:
                    </h1>
                    <StyledSelect name="category" id="category" value={formState.category} onChange={inputChange}>
                        <option defaultValue value="null">--pick a category--</option>
                        <option value="computers">Computers</option>
                        <option value="video">Video</option>
                        <option value="audio">Audio</option>
                        <option value="gaming">Gaming</option>
                    </StyledSelect>
                </label>
                {errorState.category ? <span className="error">{errorState.category}</span> : null}
                <label htmlFor="information">
                    <h1>
                        Info:
                    </h1>
                    <textarea name="information" id="information" value={formState.information} onChange={inputChange} />
                </label>
                <button disabled={buttonDisabled}>Submit</button>
            </form>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
button {
    border: 2px solid white;
    border-radius: 50px;
    width: 20vw;
    margin-top: 25px;
    padding: 1%;
}

button:hover {
  background-image: none;
  background-color: #CCC;
  border: 2px solid #CCC;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

button:disabled {
  background-image: none;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  text-shadow: none;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4267B2;
    width: 60%;
    margin: 4% auto;
    padding: 4% 0%;
    border-radius: 50px;
}

h1 {
    text-align: center;
    font-size: 2rem;
}

.error {
    color: white;
}

.create-item-title {
    font-size: 3rem;
}

textarea {
  border: 2px solid white;
  width: 30vw;
  height: 10vw;
  margin: 1.2% auto;
  padding: 1.4%;
}

`
const StyledSelect = styled.select`
border: 2px solid white;
width: 30vw;
margin: 1.2% auto;
padding: 1.4%;
`
const StyledInput = styled.input`
border: 2px solid white;
border-radius: 50px;
width: 30vw;
margin: 1.2% auto;
padding: 1.4%;
`

export default CreateItem;