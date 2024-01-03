import { LoadingContextType } from '@/types/context-types/loading.types'
import { Backdrop, Dialog } from '@mui/material'
import { Spinner } from './spinner'
import theme from '@/theme/defaultTheme'
type Props = {
  loading: LoadingContextType['loading']
}

const Loader = ({ loading }: Props) => {
  if (loading.isLoading) {
    if (!loading.loadingProps) {
      return (
        <Backdrop
          sx={{
            color: '#000000',
            zIndex: theme.zIndex.drawer + 1999999999999,
          }}
          open={loading.isLoading}
        >
          <Dialog
            open={true}
            PaperProps={{
              sx: {
                minWidth: 'max-content',
                minHeight: 'max-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                p: 3,
              },
            }}
          >
            <Spinner />
            <p className='text-center text-xl font-bold'>Loading...</p>
          </Dialog>
        </Backdrop>
      )
    } else {
      if (loading.loadingProps.page) {
        return (
          <Dialog
            open={loading.isLoading}
            fullScreen
            hideBackdrop
            PaperProps={{
              sx: {
                minWidth: 'max-content',
                minHeight: 'max-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              },
            }}
          >
            <Spinner />
            <p className='text-center text-3xl font-bold'>Loading...</p>
          </Dialog>
        )
      } else {
        return null
      }
    }
  } else {
    return null
  }
}

export default Loader
