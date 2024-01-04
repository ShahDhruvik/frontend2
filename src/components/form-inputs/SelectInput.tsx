import {
  Autocomplete,
  TextField,
  MenuItem,
  Tooltip,
  SxProps,
  Theme,
  ListItemButton,
  CircularProgress,
  Typography,
} from '@mui/material'
import { splitDescription, tooltipLength } from '@/utils/constants'
import { Control, Controller, UseFormSetValue, UseFormTrigger } from 'react-hook-form'
import { DropdownOptions, SearchDropdown } from '@/types/common.types'
import theme from '@/theme/defaultTheme'
import { LoadingContextType } from '@/types/context-types/loading.types'
import { ArrowDropDownIcon } from '@mui/x-date-pickers'

type Props = {
  options: SearchDropdown[]
  name: string
  control: Control<any> | undefined
  label: string
  setValue: UseFormSetValue<any>
  trigger: UseFormTrigger<any>
  validation: any
  loading: LoadingContextType['loading']
  dropdownName: DropdownOptions
  isDisabled?: boolean
  sx?: SxProps<Theme>
  handleChange?: (val: SearchDropdown | null) => void
}

export const listBoxPropsDropdown = () => {
  return {
    sx: {
      maxHeight: 300,
      overflow: 'auto',
      '.Mui-selected': {
        backgroundColor: `${theme.palette.gray.main} !important`,
        color: `${theme.palette.white.main} !important`,
        fontWeight: '500 ',
      },
    },
    className: 'scrollBarNone',
  }
}

const ListItemDropdown = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: SearchDropdown,
  _id: string,
) => {
  return (
    <Tooltip title={option.label} key={option._id} placement='right-end' arrow>
      <MenuItem
        {...props}
        key={option._id}
        sx={{
          color: 'black',
          fontWeight: option._id === _id ? '500' : '300',
          backgroundColor: 'white',
        }}
        selected={option._id === _id}
      >
        <Typography>
          {tooltipLength < option.label.length ? splitDescription(option.label) : option.label}
        </Typography>
      </MenuItem>
    </Tooltip>
  )
}
const SelectInput = ({
  name,
  control,
  validation,
  setValue,
  label,
  options,
  handleChange,
  isDisabled,
  trigger,
  loading,
  dropdownName,
}: Props) => {
  const loadingCondition = loading.isLoading && loading.loadingProps?.dropdown === dropdownName
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ fieldState, field }) => (
        <Autocomplete
          disabled={isDisabled}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option._id === value._id}
          options={options}
          disableClearable
          onChange={(e, val) => {
            if (val !== null) {
              if (handleChange) {
                handleChange(val)
              }
              setValue(name, val)
              trigger(name)
            }
          }}
          value={field.value}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                error={fieldState.invalid}
                placeholder={loadingCondition ? 'loading...' : `Select ${label}`}
                helperText={fieldState.error ? fieldState.error.message : ''}
                label={label}
                InputLabelProps={{ shrink: true }}
              />
            )
          }}
          loading={loadingCondition}
          loadingText='loading...'
          ListboxProps={listBoxPropsDropdown()}
          renderOption={(props, option) => ListItemDropdown(props, option, field.value?._id)}
          popupIcon={
            loadingCondition ? (
              <CircularProgress
                size={25}
                thickness={5}
                sx={{
                  color: theme.palette.lightGray.main,
                }}
              />
            ) : (
              <ArrowDropDownIcon />
            )
          }
        />
      )}
    />
  )
}

export default SelectInput
