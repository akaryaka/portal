import { authConfig } from "@/config/auth"
import { getServerSession } from "next-auth/next"

const Profile = async () => {
  const session = await getServerSession(authConfig)
  return (
    <>Profile { session?.user.name }</>
  )
}

export default  Profile