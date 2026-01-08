export function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <label>Initial Investment</label>
                <input type="number" />
            </div>
            <div className="input-group">
                <label>Annual Investment</label>
                <input type="number" />
            </div>
            <div className="input-group">
                <label>Expected Return</label>
                <input type="number" />
            </div>
            <div className="input-group">
                <label>Duration</label>
                <input type="number" />
            </div>
        </section>
    );
}