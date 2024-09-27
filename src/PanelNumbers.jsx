import PropTypes from 'prop-types';

function PanelNumbers({ panel, calculator }) {
    const { leftNumber, rightNumber, pressNumber, clearNumber, getStoredResult } = calculator;
    const number = panel === 'left' ? leftNumber : rightNumber;

    return (
        <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button onClick={() => pressNumber(panel, '1')}>1</button>
          <button onClick={() => pressNumber(panel, '2')}>2</button>
          <button onClick={() => pressNumber(panel, '3')}>3</button>
          <button onClick={() => pressNumber(panel, '4')}>4</button>
          <button onClick={() => pressNumber(panel, '5')}>5</button>
          <button onClick={() => pressNumber(panel, '6')}>6</button>
          <button onClick={() => pressNumber(panel, '7')}>7</button>
          <button onClick={() => pressNumber(panel, '8')}>8</button>
          <button onClick={() => pressNumber(panel, '9')}>9</button>
          <button onClick={() => pressNumber(panel, '0')}>0</button>
          <button onClick={() => clearNumber(panel)}>Clear</button>
          <button onClick={() => getStoredResult(panel)}>Recall</button>
        </div>
      </div>
    )
}

PanelNumbers.propTypes = {
    panel: PropTypes.string.isRequired,
    calculator: PropTypes.object.isRequired,
  }

export default PanelNumbers;