'use client';

import { ChevronDownIcon, UserIcon } from '@/app/_assets/icons';
import { cn } from '@/app/_theme/utils';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

type NavbarProfileProps = {
  setOpenItems?: (isOpen: string[]) => void;
  openItems?: string[];
};

const routeLabel = 'Profile';
/**
 *
 * @deprecated Has been integrated in the navbarRoutes map
 * @returns
 */
export const NavbarProfile = ({
  setOpenItems,
  openItems = [],
}: NavbarProfileProps) => {
  const { isOpen, toggle } = useDisclosure();

  const toggleIsOpen = () => {
    const value = !isOpen;
    toggle();
    if (value) {
      setOpenItems?.([...openItems, routeLabel]);
      return;
    }
    setOpenItems?.(openItems.filter((item) => item !== routeLabel));
  };
  return (
    <div className=" inline-block">
      <button
        className="flex items-center justify-end w-full gap-4"
        onClick={toggleIsOpen}
      >
        <UserIcon />
        <ChevronDownIcon
          className={cn('transition-all', { 'rotate-180': isOpen })}
        />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <>
            <motion.a
              className={cn(
                'flex flex-col items-end gap-5 font-medium text-brand-md uppercase '
              )}
              href="/login"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 42, opacity: 1, marginTop: 20 }}
              transition={{
                duration: 0.3,
              }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
            >
              Login
            </motion.a>
            <motion.a
              className={cn(
                'flex flex-col items-end gap-5 font-medium text-brand-md uppercase'
              )}
              href="/register"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 42, opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              exit={{ height: 0, opacity: 0 }}
            >
              Register
            </motion.a>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

{
  /* <AnimatePresence  mode="wait" initial={false}>
          {isAboutVisible && (
            <motion.div
              key="about"
              initial={{ x: 1050, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                ...(isSkillsVisible || isProjectsVisible ? { delay: 1.5 } : {}),
              }}
              exit={{ x: 1050, opacity: 0 }}
            >
              <About />
            </motion.div>
          )}
          {isSkillsVisible && (
            <motion.div
              key="skills"
              initial={{ x: 1050, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.5,
              }}
              exit={{ x: 1050, opacity: 0 }}
            >
              <Skills />
            </motion.div>
          )}
          {isProjectsVisible && (
            <motion.div
              key="projects"
              initial={{ x: 1050, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              exit={{ x: 1050, opacity: 0 }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence> */
}
