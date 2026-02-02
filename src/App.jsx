import { Header } from "./components/Header/Header";
import { ResultTable } from "./components/ResultTable/ResultTable";
import {
  INITIAL_NAME,
  ANNUAL_NAME,
  EXPECTED_NAME,
  DURATION_NAME,
  UserInput,
} from "./components/UserInput/UserInput";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [annualValue, setAnnualValue] = useState(0);
  const [expectedValue, setExpectedValue] = useState(0);
  const [durationValue, setDurationValue] = useState(0);

  /**
   * The main OnChange event which calls the formatter function
   * and handles claculation of the final output.
   */
  function updateInputsOnChange(e) {
    // Update State
    const inputName = e.target.getAttribute("name");
    switch (inputName) {
      case INITIAL_NAME:
        setInitialValue(+e.target.value);
        break;
      case ANNUAL_NAME:
        setAnnualValue(+e.target.value);
        break;
      case EXPECTED_NAME:
        setExpectedValue(+e.target.value);
        break;
      case DURATION_NAME:
        setDurationValue(+e.target.value);
        break;
      default:
        console.error('Unable to determine updated input field.');
        return;
    }
  }

  return (
      <>
          {/* Header Section */}
          <Header />

          {/* Body Section */}
          <UserInput onChangeListener={updateInputsOnChange} />

          {/* Result Table Section */}
          <ResultTable
              initialValue={initialValue}
              annualValue={annualValue}
              expectedValue={expectedValue}
              durationValue={durationValue}
          />
      </>
  );
}

export default App;