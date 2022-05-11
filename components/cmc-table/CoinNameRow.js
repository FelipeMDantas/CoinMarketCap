import Image from 'next/image'

const CoinNameRow = ({ name, icon }) => {
  return (
    <div className="flex">
      <Image src={icon} alt={name} width={30} height={20} />
      <p>{name}</p>
    </div>
  )
}

export default CoinNameRow
