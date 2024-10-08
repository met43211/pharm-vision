'use client';

import { Tabs as NativeTabs, Tab } from '@nextui-org/tabs';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useEffect } from 'react';

import { TNavigation } from '../model/types/index.type';

type Props = {
  items: TNavigation[];
  localStorageKey: string;
};

export const NavigationTabs = ({ items, localStorageKey }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const lastTab = sessionStorage.getItem(localStorageKey);

    if (!lastTab) {
      sessionStorage.setItem(localStorageKey, items[0].href);
    }

    items.forEach(({ href }) => {
      if (pathname !== href) {
        router.prefetch(href);
      }
    });
  }, []);

  const handleChange = (value: Key) => {
    sessionStorage.setItem(localStorageKey, value as string);
    router.replace(value as string, { scroll: false });
  };

  return (
    <NativeTabs
      fullWidth
      aria-label='Навигационные табы'
      classNames={{
        base: 'justify-center h-6 bg-transparent',
        tabList: 'px-2 rounded-none bg-transparent',
        cursor: 'bg-background dark:bg-default-300/50',
        tabContent: 'font-medium group-data-[selected=true]:text-foreground',
      }}
      color='primary'
      radius='lg'
      selectedKey={pathname}
      size='lg'
      onSelectionChange={handleChange}
    >
      {items.map(({ name, href }) => (
        <Tab key={href} title={name} />
      ))}
    </NativeTabs>
  );
};
