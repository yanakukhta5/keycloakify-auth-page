import type { I18n } from "./i18n";

type Props = {
  i18n: I18n
}

export const Text = ({i18n: {msgStr}}: Props) => {
  return (
    <div className="flex flex-col gap-[30px] justify-center w-[500px] mb-[150px]">
      <div>
        <p className="text-2xl font-bold text-gray-900">
          {msgStr('projectInfo')}
        </p>
        <p className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
          {msgStr('projectDescr')}
        </p>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900">
          {msgStr('author')}
        </p>
        <p className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
          {msgStr('authorDescr')}: 
          <a className="font-bold ml-[3px]" href="https://github.com/yanakukhta5">
            https://github.com/yanakukhta5
          </a>
        </p>
      </div>

      <div>
        <p className="text-2xl text-gray-900 font-bold">
          Docker
        </p>
        <p className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
          {msgStr('dockerDescr')}
        </p>
      </div>
    </div>
  );
};
