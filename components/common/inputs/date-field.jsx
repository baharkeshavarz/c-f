"use client";

import { InputAdornment, TextField, useTheme, alpha } from "@mui/material";
import DatePicker from "react-multi-date-picker"
import { p2e } from "./helper";
import en_locale from "react-date-object/locales/gregorian_en"
import { Controller } from "react-hook-form";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateField = ({control, required, label, name, isMobile }) => {
    const theme = useTheme()
    const rules = required ? {
        required: {
            value: true,
            message: label + " is required"
        }
    } : {};

    return <Controller
                control={control}
                rules={rules}
                name={name}
                render={({
                    field: { onChange, name, value },
                    formState: { errors }
                }) => {
                    if (value?.includes("-")) {
                        value = moment(value).locale("fa").format("YYYY/MM/DD")
                    }
                    return (
                        <DatePicker
                            fullWidth
                            locale={en_locale}
                            value={value || ""}
                            onChange={date => {
                                onChange(date?.isValid ? p2e(date.format("YYYY/MM/DD")) : "")
                            }}
                            render={
                                <TextField
                                    inputProps={{ maxLength: 10 }}
                                    style={{width:'100% !important'}}
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: theme.palette.grey[500]
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-focused fieldset": {
                                            borderColor: theme.palette.grey[500]
                                            }
                                        },
                                        "& .MuiInputBase-root": {
                                            borderRadius: "2px",
                                            minWidth: isMobile ? "100%" : "20rem",
                                            // backgroundColor: alpha(theme.palette.grey[200], 0.5),
                                        }
                                    }}
                                    fullWidth
                                    label={label}
                                    value={value || ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <CalendarMonthIcon size={20} color={theme.palette.primary.main} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            }
                        />
                    )
                }}
            />
}


export default DateField;