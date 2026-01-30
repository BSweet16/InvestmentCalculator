// Const strings
export const INITIAL_NAME = 'intial-input';
export const ANNUAL_NAME = 'annual-input';
export const EXPECTED_NAME = 'expected-input';
export const DURATION_NAME = 'duration-input';

export function UserInput({onChangeListener}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <label>Initial Investment</label>
                <input type="number" name={INITIAL_NAME} onChange={onChangeListener}/>
            </div>
            <div className="input-group">
                <label>Annual Investment</label>
                <input type="number" name={ANNUAL_NAME} onChange={onChangeListener}/>
            </div>
            <div className="input-group">
                <label>Expected Return</label>
                <input type="number" name={EXPECTED_NAME} onChange={onChangeListener}/>
            </div>
            <div className="input-group">
                <label>Duration</label>
                <input type="number" name={DURATION_NAME} onChange={onChangeListener}/>
            </div>
        </section>
    );
}