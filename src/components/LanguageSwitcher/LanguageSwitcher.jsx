import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownItem,
  DropdownList,
  LangSwitchBtn,
  Wrapper,
} from './LanguageSwitcher.styled';
import { CSSTransition } from 'react-transition-group';

import Icon from '../common/IconsComp/Icon';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [onShowDropdown, setOnShowDropdown] = useState(false);
  const transitionRef = useRef(null);
  const langSwitchRef = useRef(null);

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

  useEffect(() => {
    const clickOutside = e => {
      if (langSwitchRef.current && !langSwitchRef.current.contains(e.target)) {
        setOnShowDropdown(false);
      }
    };

    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <Wrapper ref={langSwitchRef}>
      <LangSwitchBtn
        isOpen={onShowDropdown}
        onClick={() => setOnShowDropdown(prev => !prev)}
      >
        {currentLanguage}

        <Icon name="small_arrow" />
      </LangSwitchBtn>
      <CSSTransition
        in={onShowDropdown}
        nodeRef={transitionRef}
        timeout={300}
        classNames="dropdown-menu"
        unmountOnExit
      >
        <DropdownList ref={transitionRef}>
          {langOption
            .filter(({ value }) => value !== language)
            .map(({ value, label }) => (
              <DropdownItem
                onClick={() => changeLanguage(value)}
                key={value + label}
              >
                {label}
              </DropdownItem>
            ))}
        </DropdownList>
      </CSSTransition>
    </Wrapper>
  );
}
