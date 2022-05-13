import Image from 'next/image'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import bnb from '../assets/bnb.png'
import avalanche from '../assets/avalanche.png'

const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}

const CoinNameRow = ({ name, icon, clicked }) => {
  return (
    <div className="flex">
      <Image src={icon} alt={name} width={30} height={20} />
      <p>{name}</p>
    </div>
  )
}

export default CoinNameRow
