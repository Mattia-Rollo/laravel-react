import { useState } from 'react'
import { Switch } from '@headlessui/react'


export default function SwitchButton(props) {

  return (
    <div className="flex content-center">
      <Switch
        checked={props.enabled}
        onClick={props.toggleMode}
        className={`${props.enabled ? 'bg-gray-500' : 'bg-orange-800'}
          relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${props.enabled ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
