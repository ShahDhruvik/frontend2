import {
  Autocomplete,
  TextField,
  MenuItem,
  Tooltip,
  Typography,
  Chip,
  CircularProgress,
} from '@mui/material'
import { splitDescription, tooltipLength } from '@/utils/constants'
import { DropdownOptions, SearchDropdown } from '@/types/common.types'
import { FieldError, UseFieldArrayReplace, UseFormTrigger } from 'react-hook-form'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import theme from '@/theme/defaultTheme'
import { LoadingContextType } from '@/types/context-types/loading.types'
import { Spinner } from '../spinner'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
type Props = {
  options: SearchDropdown[]
  label: string
  fields: SearchDropdown[]
  replace: UseFieldArrayReplace<any, any>
  errors: FieldError | undefined
  trigger: UseFormTrigger<any>
  name: string
  disable?: boolean
  handleChange?: () => void
  loading: LoadingContextType['loading']
  dropdownName: DropdownOptions
}

const listBoxPropsDropdown = () => {
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
  fields: SearchDropdown[],
  toolTipLength: number,
) => {
  const selected = fields?.find((x) => x._id === option._id)
  return (
    <Tooltip title={option.label} key={option._id} placement='right-end' arrow>
      <MenuItem
        {...props}
        key={option._id}
        sx={{
          color: 'black',
          fontWeight: selected ? '500' : '300',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          minWidth: '100%',
        }}
        selected={selected ? true : false}
      >
        <Typography sx={{ flexGrow: 1 }}>
          {toolTipLength < option.label.length ? splitDescription(option.label) : option.label}
        </Typography>
        {selected && <DoneAllIcon />}
      </MenuItem>
    </Tooltip>
  )
}
const MultiSelectInput = ({
  label,
  options,
  fields,
  replace,
  errors,
  name,
  disable,
  handleChange,
  trigger,
  loading,
  dropdownName,
}: Props) => {
  const loadingCondition = loading.isLoading && loading.loadingProps?.dropdown === dropdownName
  return (
    <Autocomplete
      disabled={disable}
      multiple={true}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      getOptionLabel={(option) => option.label ?? option}
      options={options}
      disableClearable
      onChange={(e, val) => {
        if (val !== null) {
          replace(val)
          if (handleChange) {
            handleChange()
          }
        } else {
          replace([])
        }
        trigger(name)
      }}
      value={fields}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            error={errors ? true : false}
            placeholder={loadingCondition ? 'loading...' : `Select ${label}`}
            helperText={errors?.message ?? ''}
            label={label}
            InputLabelProps={{ shrink: true }}
          />
        )
      }}
      limitTags={2}
      loading={loadingCondition}
      loadingText='loading...'
      ListboxProps={listBoxPropsDropdown()}
      renderOption={(props, option) => ListItemDropdown(props, option, fields, tooltipLength)}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            label={option.label}
            key={option._id}
            onDelete={() => {
              const leftOverTags = tagValue.filter((x) => x._id !== option._id)
              replace(leftOverTags)
              trigger(name)
            }}
          />
        ))
      }}
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
  )
}

export default MultiSelectInput
