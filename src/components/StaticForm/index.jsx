import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

export default function StaticForm() {

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();
    const onSubmit = async (data) => {
        // to simulate database query response time
        await new Promise((res) => setTimeout(() => { res() }, 3000))

        // console.log(data[`${index}`]);
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1 style={{ marginLeft: '32px' }}>Static Form</h1>

            <Box display={'flex'} gap={2} my={2} alignItems={'center'} ml={4}>
                <Box height={80}>
                    <Controller
                        name="firstName"
                        // name={`${index}.firstName`}
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
                                // error={!!errors[`${index}`]?.firstName}
                                error={!!errors.firstName}
                                // helperText={errors[`${index}`]?.firstName ? errors[`${index}`]?.firstName?.message : ''}
                                helperText={errors.firstName ? errors.firstName.message : ''}
                            />
                        )}
                    />
                </Box>

                <Box height={80}>
                    <Controller
                        name="lastName"
                        // name={`${index}.lastName`}
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
                                // error={!!errors[`${index}`]?.lastName}
                                error={!!errors.lastName}
                                // helperText={errors[`${index}`]?.lastName ? errors[`${index}`]?.lastName?.message : ''}
                                helperText={errors.lastName ? errors.lastName.message : ''}
                            />
                        )}
                    />
                </Box>
                <Box height={80}>
                    <Controller
                        name="age"
                        // name={`${index}.age`}
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
                                // error={!!errors[`${index}`]?.age}
                                error={!!errors.age}
                                // helperText={errors[`${index}`]?.age ? errors[`${index}`]?.age?.message : ''}
                                helperText={errors.age ? errors.age.message : ''}
                                onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))} // Convert to number
                            />
                        )}
                    />
                </Box>

                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" sx={{ mb: 3 }}>
                    {isSubmitting ? "processing" : "submit"}
                </Button>
            </Box>
        </form>
    )
}
