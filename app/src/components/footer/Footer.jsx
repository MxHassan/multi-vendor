import NewsLetterArea from './newsletterarea/NewsLetterArea'
import InfoAndLinksArea from './infoandlinksarea/InfoAndLinksArea'
import CopyRightsArea from './copyrightsarea/CopyRightsArea'
const Footer = () => {
  return (
    <div className='bg-light-background-third dark:bg-dark-background-main  '>
      <NewsLetterArea />
      <div className='bg-light-background-main dark:bg-dark-background-default  mt-4 rounded-xl'>
        <InfoAndLinksArea />
        <CopyRightsArea />
      </div>
    </div>
  )
}

export default Footer
