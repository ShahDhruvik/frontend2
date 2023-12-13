import { Avatar, Badge, IconButton } from '@mui/material'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import { Control, Controller, UseFormSetValue, UseFormTrigger, UseFormWatch } from 'react-hook-form'
import theme from '@/theme/defaultTheme'
import { ValidationMessage } from '@/utils/message'
type Props = {
  imageUrl: string | null
  setImageUrl: Dispatch<SetStateAction<string | null>>
  setValue: UseFormSetValue<any>
  name: string
  control: Control<any> | undefined
  trigger: UseFormTrigger<any>
  required: boolean
}

const AvatarFileInput = ({
  imageUrl,
  setImageUrl,
  setValue,
  name,
  trigger,
  control,
  required,
}: Props) => {
  const uploadInputRef = useRef<any>(null)
  const handleUploadClick = () => {
    uploadInputRef?.current.click()
  }
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(String(url))
      setValue(name, selectedFile)
      trigger(name)
    }
  }

  return (
    <>
      <input
        accept='image/*'
        className='hidden'
        id='icon-button-file'
        type='file'
        ref={uploadInputRef}
        onChange={handleFileChange}
      />
      <Controller
        name={name}
        control={control}
        render={({ fieldState }) => (
          <div className='relative bg-gray-main px-5 pt-6 pb-3 max-w-min rounded-md'>
            <button
              onClick={() => {
                setImageUrl(null)
                uploadInputRef.current.value = null
                setValue(name, null)

                trigger(name)
              }}
              className='absolute z-10 top-1 right-1'
            >
              <CancelIcon
                sx={{
                  color: theme.palette.black.main,
                  fontSize: 20,
                }}
              />
            </button>
            {/* <Badge
          badgeContent={
            <IconButton
              onClick={() => {
                setImageUrl(null)
                uploadInputRef.current.value = null
              }}
            >
              <CancelIcon />
            </IconButton>
          }
        > */}
            <Avatar
              src={
                imageUrl
                  ? imageUrl?.startsWith('uploads')
                    ? `http://localhost:8000/api/common/${imageUrl}`
                    : imageUrl
                  : ''
              }
              sx={{
                width: 56,
                height: 56,
                cursor: 'pointer',
              }}
              onClick={handleUploadClick}
            />
            {/* </Badge> */}
            {fieldState.error && (
              <p className='text-white-main text-xs'>{fieldState.error.message || ''}</p>
            )}
          </div>
        )}
        rules={{
          ...(required && {
            validate: (val) => val !== null || `${ValidationMessage.Required} `,
          }),
        }}
      />
    </>
  )
}

export default AvatarFileInput
