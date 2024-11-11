import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import FormComponent from './FormComponent';


export default function DynamicForm() {

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

    const index = useRef(0)
    const [forms, setforms] = useState([{ id: 0 }])
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        // to simulate a database query response time
        await new Promise((res) => setTimeout(() => { res() }, 3000))

        const formData = forms.map(e => {
            return data[e.id]
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
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    forms.map((item) => {
                        return (
                            <FormComponent
                                key={item.id}
                                index={item.id}
                                control={control}
                                errors={errors}
                                handleDelete={handleDelete}
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
