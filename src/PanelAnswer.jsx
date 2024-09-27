import PropTypes from 'prop-types';

function PanelAnswer({ calculator }) {
    const { result, pressEquals, storeResult } = calculator;

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => pressEquals()}>=</button>
                <button onClick={() => storeResult()}>Store</button>
            </div>
        </div>
    )
}

PanelAnswer.propTypes = {
    calculator: PropTypes.object.isRequired,
  }

export default PanelAnswer;