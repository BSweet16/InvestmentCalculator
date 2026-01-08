import { Header } from "./components/Header/Header"
import { ResultTable } from "./components/ResultTable/ResultTable"
import { UserInput } from "./components/UserInput/UserInput"

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Body Section */}
      <UserInput />

      {/* Result Table Section */}
      <ResultTable  />
    </>
  )
}

export default App
