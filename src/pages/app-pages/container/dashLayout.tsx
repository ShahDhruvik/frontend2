type Props = {
  children: any
}

const DashBoardLayout = ({ children }: Props) => {
  return (
    <div>
      <p>Header</p>
      {children}
    </div>
  )
}

export default DashBoardLayout
