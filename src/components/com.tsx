import { Box } from '@mui/material'
import { COMMON } from '@/types/common.types'
import theme from '@/theme/defaultTheme'

type Props = {}

function Com(props: Props) {
  return (
    <>
      <div className='text-blue-main'>Components</div>
      <Box
        sx={{
          color: theme.palette.red.main,
        }}
      >
        Hello
      </Box>
    </>
  )
}

export default Com
