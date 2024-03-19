import { Suspense } from 'react'

import LoaderPage from '../loader-page/LoaderPage'

const LazyLoadPage = ({ component }) => {
  return <Suspense fallback={<LoaderPage />}>{component}</Suspense>
}

export default LazyLoadPage
