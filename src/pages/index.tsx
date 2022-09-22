import type { NextPage } from 'next'
import Banner from '../ui/home/Banner/Banner'
import theme from '../infrastructure/theme'
import Page from '../infrastructure/layout/Page/Page'


const Home: NextPage = () => {

  const handleOnBannerBtnClick = () => {
    console.log('hola')

  }

  return (
    <Page background='background.png'>
      <Banner buttonText='View stores nearby' handleOnclick={handleOnBannerBtnClick} />
    </Page>

  )
}

export default Home
