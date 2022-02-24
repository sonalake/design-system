import clsx from 'clsx';

export const getChipClasses = (outlined: boolean = false) =>
  clsx(
    'px-4 py-2 rounded-full text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease',
    {
      ' border border-gray-300': outlined,
      ' bg-gray-200 border border-transparent': !outlined,
    }
  );
