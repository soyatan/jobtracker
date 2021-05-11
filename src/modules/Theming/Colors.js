// hex
const constantColors = {
    white: '#FFFFFF',
    purplelight:'#DBB2FF',
    purplestd:'#BB86FC',
    black: '#0e1111',
    black5: '#232b2b',
    black4: '#353839',
    black3: '#3b444b',
    black2: '#414a4c',
    graydark: '#536872',
    graylight: '#708090',
    transparent: 'transparent',
    pink: '#ff9cf7',
    greenlight:'#70EFDE',
    greendark:'#018786',
    crema:'#e7e7da',
    cremamedium:'#dadace',
    cremadark:'#c4c4b5'

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
        jobtextcolor:'jobs/textcolor',
        jobtextcolor2:'jobs/textcolor2',
        modalbackground:'modal/background',
        modalbuttonbackground:'modal/buttonbackground',
        jobinputbackground:'jobs/jobinputbackground'
    },
    searchbar:{
        background:'searchbar/background',
        filterbackground:'searchbar/filterbackground'
    },
    drawer:{
        background:'drawer/background',
        itembackground:'drawer/itembackground'
    }
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.black,
    [colorNames.auth.selectionColor]: constantColors.black,
    [colorNames.auth.inputBackground]: constantColors.black3,

    [colorNames.status.statusbarbackground]: constantColors.black,

    [colorNames.header.background]: constantColors.black3,
    [colorNames.header.inputBorder]: constantColors.white,
    [colorNames.header.inputText]: constantColors.white,

    [colorNames.jobs.background]: constantColors.black4,
    
    [colorNames.jobs.jobtextcolor]: constantColors.white,
    [colorNames.jobs.jobtextcolor2]: constantColors.crema,

    [colorNames.jobs.modalbackground]: constantColors.crema,
    [colorNames.jobs.modalbuttonbackground]: constantColors.crema,
    [colorNames.jobs.jobinputbackground]: constantColors.black5,

    [colorNames.searchbar.background]: constantColors.black4,
    [colorNames.searchbar.filterbackground]: constantColors.black4,

    [colorNames.drawer.background]: constantColors.crema,
    [colorNames.drawer.itembackground]: constantColors.cremamedium,



};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.crema,  
    [colorNames.auth.selectionColor]: constantColors.crema,
    [colorNames.auth.inputBackground]: constantColors.creamme,


    [colorNames.header.background]: constantColors.purplestd,
    [colorNames.status.statusbarbackground]: constantColors.purplelight, 
    [colorNames.header.inputBorder]: constantColors.black,
    
    [colorNames.header.inputText]: constantColors.black,
    [colorNames.jobs.background]: constantColors.purplelight,
    [colorNames.jobs.jobtextcolor]: constantColors.black,
    [colorNames.jobs.jobinputbackground]: constantColors.black,

    [colorNames.searchbar.background]: constantColors.crema,
};
