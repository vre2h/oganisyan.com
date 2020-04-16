import { useState, useEffect } from 'react'

export default () => {
  const [visible, setVisibility] = useState(false)

  const jumpToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        // prettier-ignore
        document.body.scrollTop > 20
        || document.documentElement.scrollTop > 20
      ) {
        setVisibility(true)
      } else {
        setVisibility(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return [visible, jumpToTop]
}
