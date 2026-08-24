'use client'

import Task from "@/components/Task/Task"
import { getUsers } from "./getUsers"
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <Task />
    </>
  )
}

export default Admin