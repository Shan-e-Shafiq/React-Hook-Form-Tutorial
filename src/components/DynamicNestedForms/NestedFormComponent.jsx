import React, { useEffect, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function NestedFormComponent(props) {

    // FUNCTIONS

    const onSubmit = async (data) => {
        formData.current = data
        const nestedData = data
        setforms(prevState => {
            return prevState.map(e => e.id != index ? e : { ...e, nestedData: { ...nestedData } })
        })
        setOpen(false)
    };

    // VARIABLES
    const { index, setforms, open, setOpen } = props
    const formData = useRef(null)
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    return (
        <div>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <h1 style={{ marginLeft: '32px' }}>Nested Form</h1>

                        <Box display={'flex'} gap={2} my={2} alignItems={'center'} ml={4}>
                            <Box height={80}>
                                <Controller
                                    name="university"
                                    control={control}
                                    defaultValue={formData.current == null ? '' : formData.current.university}
                                    rules={{
                                        required: { value: true, message: "University name is required" },
                                        minLength: { value: 3, message: "Min length is 3" },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="University Name"
                                            variant="outlined"
                                            error={!!errors.university}
                                            helperText={errors.university ? errors.university.message : ''}
                                        />
                                    )}
                                />
                            </Box>

                            <Box height={80}>
                                <Controller
                                    name="degree"
                                    control={control}
                                    defaultValue={formData.current == null ? '' : formData.current.degree}
                                    rules={{
                                        required: { value: true, message: "Degree program is required" },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Degree Program"
                                            variant="outlined"
                                            error={!!errors.degree}
                                            helperText={errors.degree ? errors.degree.message : ''}
                                        />
                                    )}
                                />
                            </Box>
                            <Box height={80}>
                                <Controller
                                    name="degreeDuration"
                                    control={control}
                                    defaultValue={formData.current == null ? '' : formData.current.degreeDuration}
                                    rules={{
                                        required: { value: true, message: "Duration is required" },
                                        min: { value: 2, message: "Should be 2 or above" },
                                        max: { value: 6, message: "Should be 6 or less" },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Last Name"
                                            type='number'
                                            variant="outlined"
                                            error={!!errors.degreeDuration}
                                            helperText={errors.degreeDuration ? errors.degreeDuration.message : ''}
                                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))} // Convert to number
                                        />
                                    )}
                                />
                            </Box>

                            <Button disabled={isSubmitting} id='10' type="submit" variant="contained" color="primary" sx={{ mb: 3 }}>
                                {isSubmitting ? "processing" : "submit"}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
