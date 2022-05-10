import Image from 'next/image'
import MoreButton from './MoreButton'

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  TrendingCardWrapper: `flex items-center justify-between`,
}

const TrendingCard = ({ title, icon, trendingData }) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.TrendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((item, index) => {})}
    </div>
  )
}

export default TrendingCard
