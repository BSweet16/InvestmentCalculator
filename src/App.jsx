import { Header } from "./components/Header/Header";
import { ResultTable } from "./components/ResultTable/ResultTable";
import {
  INITIAL_NAME,
  ANNUAL_NAME,
  EXPECTED_NAME,
  DURATION_NAME,
  UserInput,
} from "./components/UserInput/UserInput";
import { formatter } from "./util/investment.js";
import { useState } from "react";

function App() {
  const [intialValue, setInitialValue] = useState();
  const [annualValue, setAnnualValue] = useState();
  const [expectedValue, setExpectedValue] = useState();
  const [durationValue, setDurationValue] = useState();


  /**
   * Static helper method to determine if all fields have been updated with a value
   */
  function allFieldsCompleted() {
    if (intialValue <= 0) {
      return false;
    }

    if (annualValue <= 0) {
      return false;
    }

    if (expectedValue <= 0) {
      return false;
    }

    if (durationValue <= 0) {
      return false;
    }

    return true;
  }

  /**
   * Use the utils formatter to format the text in the input field.
   * @returns Formatted text in "$1,000" rather than "1000"
   */
  function formatInputOnChange(e) {
    // Calculate formatted text
    const formattedText = [...formatter.format(e.target.value)];
    console.log(formattedText.join(''));

    // Set the input's vlaue to the formatted value
    // e.target.value = formattedText.toString();

    // Return for practices
    return formattedText;
  }

  /**
   * The main OnChange event which calls the formatter function
   * and handles claculation of the final output.
   */
  function updateInputsOnChange(e) {
    // Call formatter function and update the input display value
    const formattedValue = formatInputOnChange(e);

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
              intialValue={intialValue}
              annualValue={annualValue}
              expectedValue={expectedValue}
              durationValue={durationValue}
          />
      </>
  );
}

export default App;