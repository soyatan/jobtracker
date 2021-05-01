// hex
const constantColors = {
    white: '#FFFFFF',
    purplelight:'#DBB2FF',
    purplestd:'#BB86FC',
    black: '#121212',
    transparent: 'transparent',
    pink: '#ff9cf7',
    greenlight:'#70EFDE',
    greendark:'#018786'

};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const colorNames = {
    status:{
        statusbarbackground:'status/background'
    },

    auth: {
        background: 'auth/background',
        
        inputBorder: 'auth/inputBorder',

        inputBackground: 'auth/inputBackground',
        selectionColor: 'auth/selectioncolor',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        signInButtonBackground:'auth/signinbackground',
        signUpButtonBackground:'auth/signUpbackground',
        signUpButtonText:'auth/signupButtonText',
        navigationTitleText: 'auth/appNameText',
    },
    header: {
        background: 'header/background',
        inputBorder: 'header/inputBorder',
        inputBackground: 'header/inputBackground',
        inputText: 'header/inputText',
        inputPlaceholder: 'header/inputPlaceholder',
        coloredButtonBackground: 'header/coloredButtonBackground',
        coloredButtonText: 'header/coloredButtonText',
        paleButtonBackground: 'header/paleButtonBackground',
        paleButtonText: 'header/paleButtonText',
        appNameText: 'headeruth/appNameText',
    },
    jobs:{
        background: 'jobs/background',
        jobtextcolor:'jobs/textcolor'
    }
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.black,
    [colorNames.auth.selectionColor]: constantColors.black,
    [colorNames.auth.inputBackground]: constantColors.black,

    [colorNames.status.statusbarbackground]: constantColors.black,

    [colorNames.header.background]: constantColors.black,
    [colorNames.header.inputBorder]: constantColors.white,
    [colorNames.header.inputText]: constantColors.white,

    [colorNames.jobs.background]: constantColors.greendark,
    [colorNames.jobs.jobtextcolor]: constantColors.white,

};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.white,  
    [colorNames.auth.selectionColor]: constantColors.white,
    [colorNames.auth.inputBackground]: constantColors.white,


    [colorNames.header.background]: constantColors.purplestd,
    [colorNames.status.statusbarbackground]: constantColors.purplelight, 
    [colorNames.header.inputBorder]: constantColors.black,
    [colorNames.header.inputText]: constantColors.black,
    [colorNames.jobs.background]: constantColors.purplelight,
    [colorNames.jobs.jobtextcolor]: constantColors.black,
};
