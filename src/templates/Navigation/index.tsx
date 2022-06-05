import React from 'react'
import { Navbar } from '@components'
import { useRouter } from 'next/router'

const Navigation = ({ children }: NavigationProps) => {
  const navigationPages = ['/']
  const router = useRouter()

  if (!navigationPages.includes(router.pathname)) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

type NavigationProps = {
  children: React.ReactNode
}

export default Navigation