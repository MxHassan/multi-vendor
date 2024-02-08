import NewsLetterArea from './newsletterarea/NewsLetterArea'
import InfoAndLinksArea from './infoandlinksarea/InfoAndLinksArea'
import CopyRightsArea from './copyrightsarea/CopyRightsArea'
const Footer = () => {
  return (
    <div className='bg-[#000] text-white'>
      <NewsLetterArea />
      <InfoAndLinksArea />
      <CopyRightsArea />
    </div>
  )
}

export default Footer
