import { SxProps, TextField, Theme } from '@mui/material'
import { ReactNode } from 'react'
import { Controller, Control } from 'react-hook-form'
type Props = {
  label: string
  placeholder: string
  name: string
  control: Control<any> | undefined
  handleChange: () => void
  validation: any
  isDisabled?: boolean
  sx?: SxProps<Theme>
  multiline?: number
  handleClick?: () => void
  readonly?: boolean
  keyDown?: () => void
  blur?: () => void
  endAdornment?: ReactNode
}

const TxtInput = ({
  placeholder,
  name,
  control,
  handleChange,
  validation,
  isDisabled,
  sx,
  multiline,
  label,
  handleClick,
  readonly,
  keyDown,
  blur,
  endAdornment,
}: Props) => {
  const inputStyleProps: SxProps<Theme> = { ...sx }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, ...rest } = field
        return (
          <TextField
            {...rest}
            onChange={(e) => {
              onChange(e)
              handleChange()
            }}
            onClick={() => {
              if (handleClick) {
                handleClick()
              }
            }}
            inputProps={{
              onKeyDown: () => {
                if (keyDown) {
                  keyDown()
                }
              },
              onBlur: () => {
                if (blur) {
                  blur()
                }
              },
            }}
            placeholder={placeholder}
            error={fieldState.invalid}
            helperText={fieldState.error?.message || ''}
            disabled={isDisabled ?? false}
            sx={inputStyleProps}
            multiline={multiline ? true : false}
            minRows={multiline ?? 0}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: readonly ? readonly : false,
              ...(endAdornment && {
                endAdornment: endAdornment,
              }),
            }}
            label={label}
          />
        )
      }}
      rules={validation}
    />
  )
}

export default TxtInput
