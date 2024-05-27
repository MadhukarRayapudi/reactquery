// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    console.log(updatedData)
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="cryptos-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-container">
            <h1 className="crypto-heading"> Cryptocurrency Tracker </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="crypto-image"
              alt="cryptocurrency"
            />
            <ul className="cryptos-list-container">
              <div className="headings-container">
                <p className="heading"> Coin Type </p>
                <div className="usd-euro-heading-container">
                  <p className="heading"> USD </p>
                  <p className="heading"> EURO </p>
                </div>
              </div>
              {cryptoList.map(eachItem => (
                <CryptocurrencyItem
                  cryptoDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
