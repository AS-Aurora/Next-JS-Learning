import React from 'react'

const page = ({params} : {params: {id: String}}) => {
  return (
    <div>UserDetails page for User{params.id}</div>
  )
}

export default page