
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocalizationActions, LocalizationSelectors } from '../../redux/localizationReducer';

import I18n from './I18nConfig';
import { Locales } from './LocalizationConstants';




export function useLocalization() {
    const locale = useLocale(); //en misin tr misin?
    //locale değiştiği zaman,I18n'i değiştiriyorsun.
    const localizationAgent = useMemo(() => {
        I18n.locale = locale;
        return I18n;
    }, [locale]);

    return localizationAgent;
}
//en misin tr misin reduxtan gelsin
export function useLocale() {
    return useSelector(LocalizationSelectors.locale);
}
//neden key?

export function useDispatchChangeLocale() {
    const dispatch = useDispatch();
    return key => dispatch(LocalizationActions.changeLocale({locale: key}));
}

export function useLocaleDateFormat() {
    const locale = useLocale();
    if (locale === Locales.turkish) {
        return "DD.MM.YYYY";
    }
    else if (locale === Locales.english) {
        return "MM/DD/YYYY";
    }
}
