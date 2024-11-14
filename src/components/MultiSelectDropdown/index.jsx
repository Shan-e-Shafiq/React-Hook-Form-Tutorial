import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import MultiSelect from './MultiSelect';
import { Button } from '@mui/material';


export default function MultipleSelectCheckmarks() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            certification: [],
        },
    });

    const onSubmit = (data) => {
        console.log('Selected certificates:', data.certification);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <MultiSelect
                control={control}
                controlName='certification'
                label="Certificates"
                placeholder="Select Certificates"
                options={[
                    'Oliver Hansen',
                    'Van Henry',
                    'April Tucker',
                    'Ralph Hubbard',
                    'Omar Alexander',
                    'Carlos Abbott',
                    'Miriam Wagner',
                    'Bradley Wilkerson',
                    'Virginia Andrews',
                    'Kelly Snyder',
                ]}
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}
