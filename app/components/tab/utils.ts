type Key = KeyboardEvent['key'];

export const handleTabNavigation = (key: Key, tabs: HTMLElement[]) => {
  const selectedTabIndex = tabs.indexOf(document.activeElement as HTMLElement);
  switch (key) {
    case 'ArrowUp':
    case 'ArrowLeft': {
      const previousTab = (selectedTabIndex - 1 + tabs.length) % tabs.length;
      tabs[previousTab]?.focus();

      break;
    }
    case 'ArrowDown':
    case 'ArrowRight': {
      const nextTab = (selectedTabIndex + 1 + tabs.length) % tabs.length;
      tabs[nextTab]?.focus();

      break;
    }
  }
};
