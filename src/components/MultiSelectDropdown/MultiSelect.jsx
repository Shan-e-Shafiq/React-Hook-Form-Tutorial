import React from 'react';
import { Controller } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultiSelect(props) {

    const { control, controlName, label, placeholder, options } = props

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <Controller
                name={controlName}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        input={<OutlinedInput label={label} />}
                        renderValue={(selected) => selected.join(', ')}
                        placeholder={placeholder}
                        MenuProps={MenuProps}
                    >
                        {options.map((item) => (
                            <MenuItem key={item} value={item}>
                                <Checkbox checked={field.value.includes(item)} />
                                <ListItemText primary={item} />
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    );
}

