import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import NestedFormComponent from './NestedFormComponent';

export default function FormComponent(props) {

    // VARIABLES

    const { index, control, errors, handleDelete, setforms, setModalOpen } = props
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open == true) {
            setModalOpen(true)
        } else {
            setModalOpen(false)
        }
    }, [open])


    return (
        <Box>
            <Button onClick={() => { setOpen(true) }}>Nested form</Button>
            <NestedFormComponent
                open={open}
                index={index}
                setforms={setforms}
                setOpen={setOpen}
            />
            <Box display={'flex'} gap={2} my={2} alignItems={'center'}>

                <Box height={80}>
                    <Controller
                        name={`${index}.firstName`}
                        control={control}
                        defaultValue=""
                        rules={{
                            required: { value: true, message: "First name is required" },
                            minLength: { value: 5, message: "Min length is 5" },
                            maxLength: { value: 10, message: "Max length is 10" }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="First Name"
                                variant="outlined"
                                error={!!errors[`${index}`]?.firstName}
                                helperText={errors[`${index}`]?.firstName ? errors[`${index}`]?.firstName?.message : ''}
                            />
                        )}
                    />
                </Box>

                <Box height={80}>
                    <Controller
                        name={`${index}.lastName`}
                        control={control}
                        defaultValue=""
                        rules={{
                            required: { value: true, message: "Last name is required" },
                            minLength: { value: 5, message: "Min length is 5" },
                            maxLength: { value: 10, message: "Max length is 10" }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Last Name"
                                variant="outlined"
                                error={!!errors[`${index}`]?.lastName}
                                helperText={errors[`${index}`]?.lastName ? errors[`${index}`]?.lastName?.message : ''}
                            />
                        )}
                    />
                </Box>

                <Box height={80}>
                    <Controller
                        name={`${index}.age`}
                        control={control}
                        defaultValue=""
                        rules={{
                            required: { value: true, message: "Age is required" },
                            min: { value: 18, message: "Age should be 18 or above" },
                            max: { value: 25, message: "Age should be 25 or less" },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Age"
                                type='number'
                                variant="outlined"
                                error={!!errors[`${index}`]?.age}
                                helperText={errors[`${index}`]?.age ? errors[`${index}`]?.age?.message : ''}
                                onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))} // Convert to number
                            />
                        )}
                    />
                </Box>

                <Button variant='contained' sx={{ mb: 3 }} onClick={() => { handleDelete(index) }}>Delete</Button>

            </Box >
        </Box>


    )
}

