"use client";

import { InputAdornment, TextField, useTheme } from "@mui/material";
import { onlyDigitsWithMaxLen } from "./helper";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

interface PhoneNumberInputProps{
    register: any;
    t: any;
    disabled?: boolean;
}

const PhoneNumberInput = ({ register, disabled= false, t, ...etc }: PhoneNumberInputProps) => {
    const theme = useTheme()
    return (
        <TextField
            autoFocus={true}
            disabled={disabled}
            onKeyDown={onlyDigitsWithMaxLen(11)}
            sx={{
                '& legend': { display: 'none' },
                '& .MuiInputLabel-shrink': { opacity: 0, transition: "all 0.2s ease-in" }
            }}
            type="tel"
           // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            fullWidth
            label={t.forms.mobile}
            {...register("phoneNumber", {
                required: t.formErrors.mobileRequired,
                maxLength: {
                  value: 11,
                  message: t.formErrors.mobileNumber11Digits
                },
                minLength: {
                  value: 11,
                  message: t.formErrors.mobileNumber11Digits
                }
              })}

              InputProps={{
                maxLength: 11,
                endAdornment: (
                  <InputAdornment position="end">
                      <MobileFriendlyIcon/>
                  </InputAdornment>
                ),
              }}
            {...etc}
        />
    )
}

export default PhoneNumberInput;