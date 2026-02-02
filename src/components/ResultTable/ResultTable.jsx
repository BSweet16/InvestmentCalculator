import { formatter, calculateInvestmentResults } from "../../util/investment.js";

const EMPTY_TABLE_DATA = [];

export function ResultTable({
    initialValue = 0,
    annualValue = 0,
    expectedValue = 0,
    durationValue = 0,
}) {
    // Validate user input is valid before calculating all rows
    if (durationValue <= 0){
        return (<div><p className="center">Please enter a duration greater than 0.</p></div>)
    }
    
    // Calculate row values and build table
    const calculatedTableData =
        calculateInvestmentResults({
            initialInvestment: initialValue,
            annualInvestment: annualValue,
            expectedReturn: expectedValue,
            duration: durationValue,
        }) ?? EMPTY_TABLE_DATA;
    const tableRows = calculatedTableData.map((data) =>
        {            
            // Calculate total interest earned
            const initialInvestment = calculatedTableData[0].valueEndOfYear - calculatedTableData[0].interest - calculatedTableData[0].annualInvestment;
            const totalInterestCell = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
            
            // Calculate total capital invested
            const totalCapitalInvestedCell = data.valueEndOfYear - totalInterestCell;

            // Build table row
            return (
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterestCell)}</td>
                    <td>{formatter.format(totalCapitalInvestedCell)}</td>
                </tr>
            )
        });

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
