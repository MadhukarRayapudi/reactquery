// Write your JS code here
// import {Component} from 'react'
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="each-crypto-details-list">
      <div className="bitcoin-img-name-container">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name"> {currencyName} </p>
      </div>

      <div className="values-container">
        <p className="value"> {usdValue} </p>
        <p className="value"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
