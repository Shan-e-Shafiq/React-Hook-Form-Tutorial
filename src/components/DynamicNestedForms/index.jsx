import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import FormComponent from './FormComponent';


export default function DynamicNestedForms() {

    // FUNCTIONS

    function handleAddForm() {
        index.current++
        setforms(prevState => {
            const newState = [...prevState, { id: index.current }]
            return newState
        })
    }

    function handleDelete(index) {
        setforms(prevState => {
            return prevState.filter(e => e.id != index)
        })
    }

    // VARIABLES

    const [ModalOpen, setModalOpen] = useState(false)
    const index = useRef(0)
    const [forms, setforms] = useState([{ id: 0 }])
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        const formData = forms.map(e => {
            return { ...data[e.id], nestedData: { ...e.nestedData } }
        })
        console.log('original data')
        console.log(data)
        console.log('form data')
        console.log(formData)
    };

    return (
        <Box p={4}>

            <h1>Dynamic form</h1>

            <Button variant='contained' onClick={handleAddForm}>Add a form</Button>
            <hr />
            <form onSubmit={ModalOpen == false ? handleSubmit(onSubmit) : null}>
                {
                    forms.map((item) => {
                        return (
                            <FormComponent
                                key={item.id}
                                setModalOpen={setModalOpen}
                                index={item.id}
                                control={control}
                                errors={errors}
                                handleDelete={handleDelete}
                                setforms={setforms}
                            />
                        )
                    })
                }
                <hr />
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
                    {isSubmitting ? "processing" : "submit"}
                </Button>
            </form>
        </Box>
    )
}
