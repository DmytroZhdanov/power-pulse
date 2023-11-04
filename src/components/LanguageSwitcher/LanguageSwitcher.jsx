import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownWrap,
  LangSwitchBtn,
  Wrapper,
} from './LanguageSwitcher.styled';
import { CSSTransition } from 'react-transition-group';


export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [onShowDropdown, setOnShowDropdown] = useState(false);
  const transitionRef = useRef(null)

  const changeLanguage = value => {
    i18n.changeLanguage(value);
  };

  const langOption = [
    { value: 'en', label: 'Eng' },
    { value: 'uk', label: 'Укр' },
  ];

  const currentLanguage = langOption.find(
    ({ value }) => value === language,
  ).label;

  return (
    <Wrapper >
      <LangSwitchBtn onClick={() => setOnShowDropdown(prev => !prev)}>
        {currentLanguage}
      </LangSwitchBtn>
      <CSSTransition
            in={onShowDropdown}
            nodeRef={transitionRef}
            timeout={300}
            classNames="dropdown-menu"
            unmountOnExit
          >
      <DropdownWrap  ref={transitionRef}>
        <ul>
          {langOption.map(({ value, label }) => {
            return (
              <li onClick={() => changeLanguage(value)} key={value + label}>
                {label}
              </li>
            );
          })}
        </ul>
        </DropdownWrap>
        </CSSTransition>
    </Wrapper>
  );
}
