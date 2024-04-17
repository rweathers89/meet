// src/components/NumberOfEvents.js

const NumberOfEvents = ({ setNumberOfEvents, setErrorAlert }) => {
    const handleInputChaged = (event) => {
        const value = event.target.value;

        if (isNaN(value)) {
            setErrorAlert('value is not a number');
        } else if (value > 50) {
            setErrorAlert('maximum value is 50');
        } else if (value <= 0) {
            setErrorAlert('minimum value is 1');
        } else {
            setErrorAlert('');
            setNumberOfEvents(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                defaultValue={'32'}
                className="number-of-events-input"
                // value={eventNumber}

                onChange={handleInputChaged}
            />

        </div>
    )
}

export default NumberOfEvents;