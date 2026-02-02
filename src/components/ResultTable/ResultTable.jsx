import { formatter, calculateInvestmentResults } from "../../util/investment.js";

const EMPTY_TABLE_DATA = [];

export function ResultTable({
    initialValue = 0,
    annualValue = 0,
    expectedValue = 0,
    durationValue = 0,
}) {
    /**
     * Create a table row with given cell values
     * @returns JSX.Element containing an array of values for table cells in a row
     */
    function createTableRow([
        cellValueOne,
        cellValueTwo,
        cellValueThree,
        cellValueFour,
        cellValueFive,
    ]) {
        return (
            <tr>
                <td>{cellValueOne}</td>
                <td>{cellValueTwo}</td>
                <td>{cellValueThree}</td>
                <td>{cellValueFour}</td>
                <td>{cellValueFive}</td>
            </tr>
        );
    }
    
    // Calculate row values and build table
    let runningInterestPaid = 0; // Maintian a counter of interest paid so far, to avoid having to recalculate per row
    const calculatedTableData =
        calculateInvestmentResults({
            initialInvestment: initialValue,
            annualInvestment: annualValue,
            expectedReturn: expectedValue,
            duration: durationValue,
        }) ?? EMPTY_TABLE_DATA;
    const tableRows = calculatedTableData.map((data) =>
        {
            // Format data for row
            const annualCell = data.year;
            const annualInvestmentCell = [...formatter.format(data.annualInvestment)];
            const interestCell = [...formatter.format(data.interest)];
            const totalInterestCell = [...formatter.format(runningInterestPaid += data.interest)];
            const endOfYearCell = [...formatter.format(data.valueEndOfYear)];
            return createTableRow([
                annualCell,
                annualInvestmentCell,
                interestCell,
                totalInterestCell,
                endOfYearCell,
            ])
        });

    return (
        <div id="result">
            <table id="result-table" className="center">
                <thead>
                    <tr key={data.year}>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
}
