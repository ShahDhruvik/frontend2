import { Box, Button } from '@mui/material'
import { COMMON } from '@/types/common.types'
import theme from '@/theme/defaultTheme'

type Props = {}

function Com(props: Props) {
  return (
    <>
      <div className='text-blue-main '>Components</div>
      <Box
        sx={{
          color: theme.palette.red.main,
        }}
      >
        Hello
      </Box>
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
    </>
  )
}

export default Com
