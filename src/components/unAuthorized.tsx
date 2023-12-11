type Props = {}

const UnAuthorized = (props: Props) => {
  return (
    <div className='bg-purple-main min-h-screen flex flex-col justify-center items-center'>
      <p className='text-7xl font-bold text-white-main'>400</p>
      <p className='text-4xl text-white-main'>UnAuthorized, contact to admin.</p>
    </div>
  )
}

export default UnAuthorized
