import Com from '@/components/com'
import ReactSvg from '@/assets/icons/react.svg?react'
import ReactImg from '@/assets/images/react.png'

type Props = {}

// eslint-disable-next-line react/function-component-definition
const App = (props: Props) => {
  return (
    <>
      <Com />
      <ReactSvg />
      <img src={ReactImg} width={40} height={40} />
    </>
  )
}

export default App
