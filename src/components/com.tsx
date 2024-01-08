import theme from '@/theme/defaultTheme'
import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import TxtInput from './form-inputs/txtInput'
import {
  dateSelectValidation,
  searchSelectValidation,
  txtFieldValidation,
} from '@/utils/form-validation'
import CheckInput from './form-inputs/checkInput'
import AvatarFileInput from './form-inputs/AvatarInput'
import { DateInput } from './form-inputs/DateInput'
import FileSelectInput from './form-inputs/FileInput'
import { getDropdown, insert } from '@/lib/post'
import { useLoading } from '@/context/lodaingContext'
import MultiSelectInput from './form-inputs/MultiSelectInput'
import { SearchDropdown } from '@/types/common.types'
import { DropdownValidationMessage } from '@/utils/message'
import SelectInput from './form-inputs/SelectInput'
import { selectDefaultValue } from '@/utils/constants'

type Props = {}
const Com = (props: Props) => {
  const { setLoading, loading } = useLoading()
  const [userListSingleSelect, setUserListSingleSelect] = useState<SearchDropdown[]>([])
  const getUsers = async () => {
    const res = await getDropdown(setLoading, { dropdown: 'User' })
    setUserListSingleSelect([selectDefaultValue, ...res])
  }
  useEffect(() => {
    getUsers()
  }, [])

  type FieldsHere = {
    firstName: string
    isActive: boolean
    userIds: SearchDropdown[]
    userId: SearchDropdown
    avatar: File | null
    avatarUrl: string
    dateField: Date | null
    uploads: {
      document: File | null
    }[]
  }
  const {
    control,
    setValue,
    trigger,
    formState,
    clearErrors,
    setError,
    handleSubmit,
    watch,
    getValues,
  } = useForm<FieldsHere>({
    defaultValues: {
      firstName: '',
      isActive: false,
      avatar: null,
      avatarUrl: '',
      dateField: null,
      uploads: [],
      userIds: [],
      userId: selectDefaultValue,
    },
  })
  const [fileUrl, setFileUrl] = useState<
    {
      document: File | null
    }[]
  >([])

  const { errors } = formState
  const countryIdsArray = useFieldArray({
    control,
    name: 'userIds',
    rules: { validate: (val) => val.length !== 0 || DropdownValidationMessage.SelectUser },
  })
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
        maxWidth={700}
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
          <FileSelectInput
            files={fileUrl}
            control={control}
            name='uploads'
            setValue={setValue}
            setFiles={setFileUrl}
            validation={{ isRequired: true, maxLength: 3 }}
            trigger={trigger}
          />
          <div className='flex items-center gap-5'>
            <AvatarFileInput
              name='avatar'
              urlName='avatarUrl'
              setValue={setValue}
              control={control}
              trigger={trigger}
              required={true}
              getValues={getValues}
            />
            <div className='flex-1 gap-5 flex flex-col'>
              <MultiSelectInput
                fields={countryIdsArray.fields}
                label='Users*'
                name='userIds'
                options={userListSingleSelect}
                replace={countryIdsArray.replace}
                trigger={trigger}
                errors={errors.userIds?.root}
                loading={loading}
                dropdownName='User'
              />
              <SelectInput
                control={control}
                setValue={setValue}
                validation={searchSelectValidation('User')}
                label='User*'
                name='userId'
                options={userListSingleSelect}
                trigger={trigger}
                loading={loading}
                dropdownName='User'
              />
            </div>
          </div>
          <Button
            color='blue'
            variant='contained'
            sx={{ color: theme.palette.white.main }}
            type='submit'
          >
            Submit
          </Button>
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
