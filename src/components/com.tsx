import theme from '@/theme/defaultTheme'
import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import TxtInput from './form-inputs/txtInput'
import { dateSelectValidation, txtFieldValidation } from '@/utils/form-validation'
import CheckInput from './form-inputs/checkInput'
import AvatarFileInput from './form-inputs/AvatarInput'
import { DateInput } from './form-inputs/DateInput'
import FileSelectInput from './form-inputs/FileInput'
import { BreakPoints, ThemeOperator, generateBreakPoints } from '@/theme/theme-data'
import axiosInstance from '@/axiosInstance'
import { insert } from '@/lib/post'
import { useLoading } from '@/context/lodaingContext'

type Props = {}

const Com = (props: Props) => {
  const { setLoading, loading } = useLoading()
  type FieldsHere = {
    firstName: string
    isActive: boolean
    avatar: File | null
    dateField: Date | null
    uploads: {
      document: File | null
    }[]
  }
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [fileUrl, setFileUrl] = useState<
    {
      document: File | null
    }[]
  >([])
  const { control, setValue, trigger, formState, clearErrors, setError, handleSubmit } =
    useForm<FieldsHere>({
      defaultValues: {
        firstName: '',
        isActive: false,
        avatar: null,
        dateField: null,
        uploads: [],
      },
    })

  const { errors } = formState
  console.log(errors)
  const onSubmitHandle: SubmitHandler<FieldsHere> = (data: FieldsHere) => {
    console.log(data)
  }
  return (
    <>
      <div className='text-blue-main '>Components</div>
      <Box
        sx={{
          color: theme.palette.red.main,
        }}
        maxWidth={500}
        m={2}
      >
        <form onSubmit={handleSubmit(onSubmitHandle)} className='flex flex-col gap-5 '>
          <TxtInput
            label='Name'
            placeholder='Enter name'
            control={control}
            handleChange={() => {}}
            name='firstName'
            validation={txtFieldValidation(true)}
            sx={{}}
          />
          <DateInput
            label='Date'
            control={control}
            handleChange={() => {}}
            name='dateField'
            validation={dateSelectValidation('Date')}
            clearErrors={clearErrors}
            setError={setError}
            trigger={trigger}
          />
          <CheckInput
            control={control}
            name='isActive'
            setValue={setValue}
            trigger={trigger}
            required={true}
            errors={errors}
            label='active'
          />
          <AvatarFileInput
            imageUrl={avatarUrl}
            name='avatar'
            setImageUrl={setAvatarUrl}
            setValue={setValue}
            control={control}
            trigger={trigger}
            required={true}
          />
          <FileSelectInput
            files={fileUrl}
            control={control}
            name='uploads'
            setValue={setValue}
            setFiles={setFileUrl}
            validation={{ isRequired: true, maxLength: 3 }}
            trigger={trigger}
          />
          {/* <Button
            color='blue'
            variant='contained'
            sx={{ color: theme.palette.white.main }}
            type='submit'
          >
            Submit
          </Button> */}
        </form>
      </Box>
      <Button
        color='blue'
        variant='contained'
        sx={{ color: theme.palette.white.main }}
        type='button'
        onClick={async (e) => {
          e.preventDefault()
          const data = await insert(setLoading, {
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
        }}
      >
        send post
      </Button>
    </>
  )
}

export default Com
