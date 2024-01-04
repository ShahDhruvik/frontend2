import { selectAllDefaultValue } from "./constants"
import { ValidationMessage } from "./message"

export const numberFieldValidation = (
    isRequired: boolean,
    length?: number,
    type?: 'Phone' | 'PinCode' | 'Days',
) => {
    switch (type) {
        case 'Phone':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                min: { value: 0, message: ValidationMessage.PositiveInteger },
                minLength: {
                    value: 10,
                    message: ValidationMessage.TenDigits,
                },
                maxLength: {
                    value: 10,
                    message: ValidationMessage.TenDigits,
                },
            }
        case 'Days':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                min: { value: 1, message: ValidationMessage.GreaterThanZero },
            }
        case 'PinCode':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                min: { value: 0, message: ValidationMessage.PositiveInteger },
                minLength: {
                    value: 6,
                    message: ValidationMessage.SixDigits,
                },
                maxLength: {
                    value: 6,
                    message: ValidationMessage.SixDigits,
                },
            }
        default:
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                minLength: { value: 1, message: ValidationMessage.OneDigit },
                ...(length && {
                    maxLength: {
                        value: length,
                        message: `${ValidationMessage.AtMostDigits} ${length}.`,
                    }
                }),
                min: { value: 1, message: ValidationMessage.GreaterThanZero },
            }
    }
}

export const searchSelectValidation = (label: string, notRequired?: boolean) => {
    return !notRequired ? {
        validate: (value: any) => {
            return value?._id !== selectAllDefaultValue?._id || `${ValidationMessage.Select} ${label}`
        },
    } : {}
}
export const dateSelectValidation = (name: string) => {
    return {
        validate: (value: any) => {
            return value !== null || `${ValidationMessage.Select} ${name}`
        },
    }
}
export const txtFieldValidation = (
    isRequired: boolean,
    type?:
        | 'txtArea'
        | 'Email'
        | 'ShortName'
        | 'multiEmail'
        | 'Password'
        | 'PositiveNumbers',
    fieldLength?: number,
    maxLength?: number,
) => {
    switch (type) {

        case 'ShortName':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                minLength: { value: 1, message: ValidationMessage.MinOneCharacter },
                maxLength: {
                    value: 5,
                    message: ValidationMessage.MaxFiveCharacters,
                },
            }
        case 'txtArea':
            return {
                ... (isRequired && { required: ValidationMessage.Required }),
                minLength: { value: 1, message: ValidationMessage.MinOneCharacter },
                ...(maxLength && {
                    maxLength: {
                        value: maxLength,
                        message: `${ValidationMessage.MaxCharacters} ${maxLength}`,
                    }
                }),
            }
        case 'Email':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: ValidationMessage.Email,
                },
            }
        case 'Password':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                        ValidationMessage.Password,
                },
            }
        case 'PositiveNumbers':
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                pattern: {
                    value: /^^(0|[1-9][0-9]{0,9})$/,
                    message: ValidationMessage.PositiveInteger,
                },
            }
        case 'multiEmail':
            return {
                ...(isRequired && {
                    required: {
                        value: fieldLength === 0,
                        message: ValidationMessage.Required,
                    }
                }),
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: ValidationMessage.Email,
                },
            }
        default:
            return {
                ...(isRequired && { required: ValidationMessage.Required }),
                minLength: { value: 1, message: ValidationMessage.MinOneCharacter },
                ...(maxLength && {
                    maxLength: {
                        value: maxLength,
                        message: `${ValidationMessage.MaxCharacters} ${maxLength}`,
                    }
                }),
            }
    }
}

