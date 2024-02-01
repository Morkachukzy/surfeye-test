'use client';

import { useRef } from 'react';
import { ChevronDownIcon } from '@/app/_assets/icons';
import { useOnClickOutside } from '@/app/hooks/use-on-click-outside';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import { GenericButton } from '@/app/components/button';
import { cn } from '@/app/_theme/utils';

type GenericDropdownOption = {
  label: string | React.ReactNode;
  value: string;
};
type GenericDropdownProps = {
  value?: string;
  onChange?: (value: string) => void;
  options?: GenericDropdownOption[];
  placeholder?: string | React.ReactNode;
};

export const GenericDropdown = ({
  value,
  onChange,
  options = [],
  placeholder,
}: GenericDropdownProps) => {
  const { isOpen, toggle, close } = useDisclosure();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(dropdownRef, () => {
    console.log('click outside');
    close();
  });

  const handleClick = (value: string) => {
    onChange?.(value);
    close();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <GenericButton
        onClick={toggle}
        variant="secondary"
        className={cn('justify-between gap-8 shadow-brand-300', {
          'text-opacity-30': !value,
        })}
        wide
        small
        rightIcon={<ChevronDownIcon className="w-4 h-2 stroke-brand-primary" />}
      >
        {value || placeholder}
      </GenericButton>

      {isOpen && options.length > 0 ? (
        <div
          className={cn(
            'bg-white z-30 absolute top-[calc(100%+1rem)] inset-x-0 shadow-brand-300 rounded-3xl overflow-hidden'
          )}
        >
          {options.map((option) => (
            <GenericButton
              key={option.value}
              onClick={() => handleClick(option.value)}
              variant="stripped"
              className="justify-between gap-8 transition-colors hover:bg-brand-primary hover:text-brand-light rounded-none"
              wide
              small
            >
              {option.label}
            </GenericButton>
          ))}
        </div>
      ) : null}
    </div>
  );
};
