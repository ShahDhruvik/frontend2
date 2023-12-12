import theme from '@/theme/defaultTheme'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'

type Props = {}

const Com = (props: Props) => {
  return (
    <>
      <div className='text-blue-main '>Components</div>
      <Box
        sx={{
          color: theme.palette.red.main,
        }}
        display={'flex'}
        flexDirection={'column'}
        maxWidth={500}
        m={2}
        gap={2}
      >
        <Button
          color='brown'
          variant='contained'
          sx={{ color: theme.palette.white.main }}
          disabled
          onClick={() => {
            console.log('object')
          }}
        >
          Hello GOOD Right
        </Button>
        <TextField
          label='Name'
          placeholder='Enter name'
          InputLabelProps={{ shrink: true }}
          disabled={true}
        />
      </Box>
    </>
  )
}

export default Com
