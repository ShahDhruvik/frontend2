import { ValidationMessage } from '@/utils/message'
import { Autocomplete, AutocompleteRenderInputParams, Button, Chip, TextField } from '@mui/material'
import { Dispatch, SetStateAction, useRef } from 'react'
import {
  Control,
  Controller,
  FieldError,
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form'

type Props = {
  files: {
    document: File | null
  }[]
  setFiles: Dispatch<
    SetStateAction<
      {
        document: File | null
      }[]
    >
  >
  setValue: UseFormSetValue<any>
  name: string
  control: Control<any> | undefined
  validation: { isRequired: boolean; maxLength?: number }
  trigger: UseFormTrigger<any>
}

const FileSelectInput = ({
  files,
  setValue,
  setFiles,
  name,
  control,
  validation,
  trigger,
}: Props) => {
  const uploadInputRef = useRef<any>(null)
  const handleUploadClick = () => {
    if (uploadInputRef) uploadInputRef?.current.click() as any
  }
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFiles([...files, { document: selectedFile }])
      setValue(name, [...files, selectedFile])
    }
    trigger(name)
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error } }) => (
        <Autocomplete
          disableClearable
          multiple={true}
          options={[]}
          freeSolo
          value={files ?? []}
          renderInput={(params) => {
            const { InputLabelProps, ...rest } = params as AutocompleteRenderInputParams
            return (
              <TextField
                error={error ? true : false}
                helperText={error?.message ?? ''}
                InputLabelProps={{ shrink: true }}
                placeholder='Upload file'
                {...rest}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Button
                      onClick={() => {
                        handleUploadClick()
                      }}
                      sx={{
                        maxHeight: '20px',
                        maxWidth: 'max-content',
                        minWidth: 'max-content',
                      }}
                      color='pink'
                      {...(validation.maxLength && {
                        disabled: files.length >= validation.maxLength,
                      })}
                    >
                      Upload
                      <input
                        type='file'
                        style={{ display: 'none' }}
                        ref={uploadInputRef}
                        onChange={handleFileChange}
                      />
                    </Button>
                  ),
                }}
                sx={{
                  '.MuiOutlinedInput-root': {
                    py: 1,
                  },
                }}
              />
            )
          }}
          renderTags={(value) =>
            value.map((x) => {
              return (
                <Chip
                  variant='outlined'
                  label={x.document?.name ?? ''}
                  key={Math.random()}
                  onDelete={() => {
                    if (uploadInputRef.current) {
                      uploadInputRef.current.value = null
                    }
                    const file = value.filter((f) => f !== x)
                    setFiles(file)
                    setValue(name, file)
                    trigger(name)
                  }}
                />
              )
            })
          }
        />
      )}
      rules={{
        ...(validation.isRequired &&
          !validation.maxLength && {
            validate: (val) => val.length !== 0 || `${ValidationMessage.Required}`,
          }),
        ...(validation.isRequired &&
          validation.maxLength && {
            validate: (val) =>
              (val.length !== 0 && validation.maxLength && val.length <= validation.maxLength) ||
              `${ValidationMessage.Required} ${ValidationMessage.MaxFiles} ${validation.maxLength}`,
          }),
      }}
    />
  )
}

export default FileSelectInput
