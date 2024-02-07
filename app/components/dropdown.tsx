'use client';

import { useCallback, useMemo, useRef } from 'react';
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
  value = '',
  onChange,
  options = [],
  placeholder,
}: GenericDropdownProps) => {
  const { isOpen, toggle, close } = useDisclosure();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(dropdownRef, () => {
    close();
  });

  const handleClick = (value: string) => {
    onChange?.(value);
    close();
  };

  const selectedLabel = useMemo(() => {
    const labelIndex = options.findIndex((option) => option.value === value);

    return labelIndex === -1 ? placeholder : options[labelIndex].label;
  }, [options, placeholder, value]);

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
        {selectedLabel}
      </GenericButton>

      {isOpen && options.length > 0 ? (
        <div
          className={cn(
            'bg-white z-30 h-[200px] md:h-[270px] overflow-y-auto absolute top-[calc(100%+1rem)] inset-x-0 shadow-brand-300 rounded-3xl '
          )}
        >
          {options.map((option) => (
            <GenericButton
              key={option.value}
              onClick={() => handleClick(option.value)}
              variant="stripped"
              className={cn(
                'justify-between gap-8 transition-colors rounded-none',
                {
                  'bg-brand-primary text-brand-light ':
                    option.label === selectedLabel,
                  'hover:bg-brand-grey': option.label !== selectedLabel,
                }
              )}
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
