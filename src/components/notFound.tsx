type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='bg-purple-main min-h-screen flex flex-col justify-center items-center'>
      <p className='text-7xl font-bold text-white-main'>404</p>
      <p className='text-4xl text-white-main'>Page not found.</p>
    </div>
  )
}

export default NotFound
