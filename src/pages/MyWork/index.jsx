import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { SimpleCard } from '../../components/SimpleCard'

export const MyWork = () => {
  return (
    <>
      <PageTitle>Portafolio</PageTitle>
      <section>
        <SimpleCard title='Test Card'>
          <img src='../../assets/img/profilePicture.jpg' />
          <p>
            n publishing and graphic design, Lorem ipsum is a placeholder text
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available. It is also
          </p>
        </SimpleCard>
      </section>
    </>
  )
}
