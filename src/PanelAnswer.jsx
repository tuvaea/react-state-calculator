import PropTypes from 'prop-types';

function PanelAnswer({ calculator }) {
    const { result, pressEquals } = calculator;

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => pressEquals()}>=</button>
            </div>
        </div>
    )
}

PanelAnswer.propTypes = {
    calculator: PropTypes.object.isRequired,
  }

export default PanelAnswer;