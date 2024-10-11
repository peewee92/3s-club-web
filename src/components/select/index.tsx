import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils/tools'
import Transition from '../transition'
import React, { useMemo } from 'react'

export interface OptionsProps {
  label: string;
  value: string | number;
}

interface SelectProps {
  value: string | number
  options: OptionsProps[]
  onChange?: (value: any, item?: Record<string, any>) => void
}

const Select: React.FC<SelectProps> = (props) => {
  const { value = '', options = [], onChange } = props

  const selectedLabel = useMemo(() => {
    const { label } = options.find(option => option.value === value) || {}
    return label || 'unkown'
  }, [value, options])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-inset ring-primary-300 hover:bg-gray-50">
          {selectedLabel}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition>
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              options.map(
                option =>
                  <Menu.Item key={option.value}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm cursor-pointer'
                        )}
                        onClick={() => onChange?.(option.value, option)}
                      >
                        {option.label}
                      </div>
                    )}
                  </Menu.Item>
              )
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default Select