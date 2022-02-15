import React, { useMemo } from 'react';
import { Meta, Story } from '@storybook/react';

import config from '../../tailwind.config';

const meta: Meta = {
  title: 'Atoms/Colors',
};

export default meta;

type TailwindColorValues = Record<string, string | Record<string, string>>;

export const Colors: Story = () => {
  const colorEntries = useMemo(() => {
    const toColorEntries = (
      obj: TailwindColorValues,
      namePrefix: string
    ): string[][] =>
      Object.entries(obj).reduce((acc, [colorName, colorData]) => {
        if (typeof colorData === 'string') {
          return [...acc, [`${namePrefix}${colorName}`, colorData]];
        } else {
          return [...acc, ...toColorEntries(colorData, `${colorName}-`)];
        }
      }, [] as string[][]);

    return toColorEntries(
      (config.theme.extend?.colors as TailwindColorValues) || {},
      ''
    );
  }, []);

  return (
    <>
      <h1 className="pb-3">Colors</h1>

      <ul>
        {colorEntries.map(([name, value]) => (
          <li key={name} className="py-2 border-t flex items-center">
            <div
              className="h-8 w-12 border mr-3"
              style={{ backgroundColor: value }}
            />
            <span className="mr-14 text-sm font-mono text-black">{value}</span>
            <span className="text-sm font-mono text-black">{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
