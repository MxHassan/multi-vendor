import styles from '../../styles/styles'
import Navbar from './navbar/Navbar'

import SearchBar from './searchbar/SearchBar'

const Header = () => {
  return (
    <>
      <div className={`${styles.section}`}>
        <SearchBar />
      </div>
      <Navbar />
    </>
  )
}

export default Header
