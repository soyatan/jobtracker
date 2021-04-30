import I18n from 'i18n-js';

import english from './Translations/English'; // al bunu
import turkish from './Translations/Turkish'; //al bunu

import { Locales } from './LocalizationConstants';


I18n.defaultLocale = Locales.english;
I18n.locale = Locales.english;
I18n.fallbacks = true;
I18n.locales.no = Locales.english;

I18n.translations = {
    [Locales.english]: english,
    [Locales.turkish]: turkish,
};

export default I18n;
