import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonPage = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
        <Button>Click ME!</Button>
        <Button variant={'primary'}>Primary!</Button>
        <Button variant={'primaryOutline'}>PRIMARY ouTLINE!</Button>

        <Button variant={'secondary'}>Primary!</Button>
        <Button variant={'secondaryOutline'}>PRIMARY ouTLINE!</Button>

        <Button variant={'danger'}>Primary!</Button>
        <Button variant={'dangerOutline'}>PRIMARY ouTLINE!</Button>

        <Button variant={'super'}>Primary!</Button>
        <Button variant={'superOutline'}>PRIMARY ouTLINE!</Button>
 
        <Button variant={'superOutline'}>PRIMARY ouTLINE!</Button>

        <Button variant={'sidebar'}>Primary!</Button>
        <Button variant={'sidebarOutline'}>PRIMARY ouTLINE!</Button>
    </div>
  )
}

export default ButtonPage