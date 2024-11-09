import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import './App.css'

function App() {

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();
    const onSubmit = async (data) => {
        await new Promise((res) => setTimeout(() => { res() }, 5000))
        console.log(data);
    };

    useEffect(() => {
        console.log('rerender')
    })

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box ml={10} mt={10}>
                    <Controller
                        name="firstName"
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
                                error={!!errors.firstName}
                                helperText={errors.firstName ? errors.firstName.message : ''}
                            />
                        )}
                    />
                </Box>

                <Box ml={10} mt={10}>
                    <Controller
                        name="lastName"
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
                                error={!!errors.lastName}
                                helperText={errors.lastName ? errors.lastName.message : ''}
                            />
                        )}
                    />
                </Box>
                <Box ml={10} mt={10}>
                    <Controller
                        name="age"
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
                                label="Last Name"
                                type='number'
                                variant="outlined"
                                error={!!errors.age}
                                helperText={errors.age ? errors.age.message : ''}
                            />
                        )}
                    />
                </Box>

                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
                    {isSubmitting ? "processing" : "submit"}
                </Button>
            </form>
        </>
    )
}

export default App