/* eslint-disable react/jsx-key */
import Com from '@/components/com'
import { useLoading } from '@/context/lodaingContext'
import { fetchUser } from '@/lib/user'
import { useEffect, useState } from 'react'

type Props = {}

const MainPage = (props: Props) => {
  const { loading, setLoading } = useLoading()
  const [users, setUsers] = useState<any[]>([])
  const getUsers = async () => {
    const res = await fetchUser(setLoading, { page: true })
    setUsers(res)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <div>MainPage</div>
      {users.map((x) => {
        return (
          <div
            key={x._id}
            className='bg-red-main font-extrabold'
          >{`${x.firstName} ${x.lastName}`}</div>
        )
      })}
    </>
  )
}

export default MainPage
