import { ValidationMessage } from '@/utils/message'
import { Checkbox } from '@mui/material'
import { Control, Controller, FieldErrors, UseFormSetValue, UseFormTrigger } from 'react-hook-form'

type Props = {
  name: string
  control: Control<any> | undefined
  setValue: UseFormSetValue<any>
  trigger: UseFormTrigger<any>
  handleToggle?: (checked: boolean) => void
  isDisabled?: boolean
  required?: boolean
  errors: FieldErrors<any>
  label: string
}

const CheckInput = ({
  control,
  name,
  handleToggle,
  setValue,
  trigger,
  isDisabled,
  required,
  errors,
  label,
}: Props) => {
  return (
    <div>
      <div className='flex items-center'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <Checkbox
                {...field}
                checked={field.value ?? false}
                onChange={(e, checked) => {
                  setValue(name, checked)
                  trigger(name)
                  if (handleToggle) {
                    handleToggle(checked)
                  }
                }}
                disabled={isDisabled}
                sx={{
                  '&.MuiCheckbox-root': {
                    p: '0px 9px 0px 0px',
                  },
                }}
              />
            )
          }}
          rules={
            required
              ? {
                  validate: (val) => val || ValidationMessage.CheckInput,
                }
              : {}
          }
        />
        <p className='text-black-main'>{label}</p>
      </div>
      <p className='text-red-main text-xs'>{(errors[name]?.message as string) || ''}</p>
    </div>
  )
}

export default CheckInput
