"use client"

import React from 'react'
import { Switch } from '../ui/switch'
import { useThemeContext } from '@/context/ThemeContext'
import { Label } from '../ui/label'

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useThemeContext()
  return (
  <>
<div className="flex items-center">
<Label htmlFor='dark-mode-toggle' className='font-bold mr-1'>Dark Mode</Label>
    <Switch
    id='dark-mode-toggle'
    checked={theme === "dark"? (true):(false)}
    onClick={toggleTheme}
    />
</div>
</>
  )
}
