import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Task from "@/components/Task/Task"

const Students = () => {
  return (
    <>
      <Header />
      <main className="h-[100vh]">
        <h1>tasks</h1>
        <Task />
      </main>
      <Footer />
    </>
  )
}

export default Students