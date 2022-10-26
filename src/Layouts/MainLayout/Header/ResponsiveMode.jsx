import { FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
// import { ResponsiveContext } from '../../../main';

function ResponsiveMode() {
    // const { radioResponsiveModeState, radioResponsiveModeDispatch } = useContext(ResponsiveContext);

    // const handleChange = (event) => {
    //     radioResponsiveModeDispatch({ type: 'responsivemode', payload: event.target.value });
    // };

    return (
        <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="xl"
            // value={radioResponsiveModeState}
            // onChange={handleChange}
        >
            <FormControlLabel value="sm" control={<Radio />} label="sm" labelPlacement="start" />
            <FormControlLabel value="md" control={<Radio />} label="md" labelPlacement="start" />
            <FormControlLabel value="lg" control={<Radio />} label="lg" labelPlacement="start" />
            <FormControlLabel value="xl" control={<Radio />} label="xl" labelPlacement="start" />
        </RadioGroup>
    );
}

export default ResponsiveMode;
