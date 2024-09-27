import PropTypes from 'prop-types';

function PanelOperators({ calculator }) {
    const { operator, pressOperator } = calculator;

    return (
        <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => pressOperator('+')}>+</button>
          <button onClick={() => pressOperator('-')}>-</button>
          <button onClick={() => pressOperator('*')}>*</button>
          <button onClick={() => pressOperator('÷')}>÷</button>
        </div>
      </div>
    )
}
PanelOperators.propTypes = {
    calculator: PropTypes.object.isRequired,
  }

export default PanelOperators;