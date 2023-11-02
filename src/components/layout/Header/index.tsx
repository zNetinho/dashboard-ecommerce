import Logo from '@components/components/Logo'
import { ModeToggle } from '@components/components/SwitchTheme'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-around items-center'>
      <div>
        <Logo/> 
      </div>
      <div>
        {/* Menu */}
      </div>
      <div>
        {/* Busca */}
      </div>
      <div className=''>
        <ModeToggle />
      </div>
    </header>
  )
}
