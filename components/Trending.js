import { useState } from 'react'
import ReactSwitch from 'react-switch'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import recent from '../assets/recent.png'
import gainers from '../assets/gainers.png'
import Rate from './cmc-table/Rate'
import TrendingCard from './TrendingCard'

const trendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
  {
    number: 2,
    symbol: 'USDT',
    name: 'Tether',
    icon: usdt,
    isIncrement: false,
    rate: '9.23%',
  },
  {
    number: 3,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
]

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
}

const Trending = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className="styles.h1">
            Today's Cryptocurrency Prices by Market Cap
          </h1>

          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            />
          </div>
        </div>
        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard
            title="trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently Added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  )
}

export default Trending
