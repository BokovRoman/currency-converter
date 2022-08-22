import style from './CurrencyRow.module.css'

const CurrencyRow = ({
  options,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount }) => {
  
  return (
      <div className={style.wrapper}>
          <input
              type="number"
              value={amount}
              onChange={onChangeAmount}
              className={style.input}
          />
          <select
              className={style.select}
              value={selectedCurrency}
              onChange={onChangeCurrency}
          >
              {options.map(({ currency }) => (
                  <option
                      key={currency}
                      value={currency}>
                      <span>{currency.toUpperCase()}</span>
                  </option>
              ))}
          </select>
      </div>
  );
}


export default CurrencyRow;