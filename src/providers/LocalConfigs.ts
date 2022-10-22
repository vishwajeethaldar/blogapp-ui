import React from 'react'

const LocalConfigs = () => {

  const baseurl = import.meta.env.VITE_baseurl
  const appbaseurl = import.meta.env.BASE_URL
  const local = import.meta.env.LOG
  return (
    {
      baseurl,
      appbaseurl,
      local
    }
  )
}

export default LocalConfigs
