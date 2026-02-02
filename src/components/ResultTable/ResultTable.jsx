import { calculateInvestmentResults } from "../../util/investment.js";

const DEFAULT_TABLE_DATA = [
    {
        year: 1,
        investmentValue: 1,
        interestYear: 1,
        totalInterest: 1,
        investedCapital: 1,
    },
    {
        year: 2,
        investmentValue: 2,
        interestYear: 2,
        totalInterest: 2,
        investedCapital: 2,
    },
    {
        year: 3,
        investmentValue: 3,
        interestYear: 3,
        totalInterest: 3,
        investedCapital: 3,
    },
    {
        year: 4,
        investmentValue: 4,
        interestYear: 4,
        totalInterest: 4,
        investedCapital: 4,
    },
    {
        year: 5,
        investmentValue: 5,
        interestYear: 5,
        totalInterest: 5,
        investedCapital: 5,
    },
];

export function ResultTable({
    initialvalue = 0,
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

    const calculatedTableData =
        calculateInvestmentResults(
            initialvalue,
            annualValue,
            expectedValue,
            durationValue,
        ) ?? DEFAULT_TABLE_DATA;
    console.log(calculatedTableData);
    const tableRows = calculatedTableData.map((data) =>
        createTableRow([
            data.year,
            data.investmentValue,
            data.interestYear,
            data.totalInterest,
            data.investedCapital,
        ]),
    );

    return (
        <div id="result">
            <table id="result-table" className="center">
                <thead>
                    <tr>
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
