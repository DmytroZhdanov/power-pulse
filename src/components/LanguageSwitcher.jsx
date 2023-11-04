import { useTranslation } from 'react-i18next';

import Select from 'react-select';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const changeLanguage = ({ value }) => {
    i18n.changeLanguage(value);
  };

  const langOption = [
    { value: 'en', label: 'Eng' },
    { value: 'uk', label: 'Укр' },
  ];

  return (
    <div style={{ marginRight: 'auto' }}>
      <Select
        defaultValue={
          langOption[langOption.findIndex(({ value }) => value === language)]
        }
        onChange={changeLanguage}
        options={langOption}
        styles={{}}
      />
    </div>
  );
}
