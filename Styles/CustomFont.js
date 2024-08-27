import { extendTheme, Heading } from "native-base";

const customFont = extendTheme({
    fontConfig: {
        Sahel: {
            '100': {
                normal: "Sahel-Light"
            },
            '200': {
                normal: "Sahel-VF"
            },
            '300': {
                normal: "Sahel"
            },
            '400': {
                normal: "Sahel-SemiBold"
            },
            '500': {
                normal: "Sahel-Bold"
            },
            '600': {
                normal: "Sahel-Black"
            }
        },
        Vazirmatn:{
            '100':{
                normal:'Vazirmatn-Thin'
            },
            '200':{
                normal:'Vazirmatn-ExtraLight'
            },
            '300':{
                normal:'Vazirmatn-Light'
            },
            '400':{
                normal:'Vazirmatn-Regular'
            },
            '500':{
                normal:'Vazirmatn-Medium'
            },
            '600':{
                normal:'Vazirmatn-SemiBold'
            },
            '700':{
                normal:'Vazirmatn-Bold'
            },
            '800':{
                normal:'Vazirmatn-ExtraBold'
            },
            '900':{
                normal:'Vazirmatn-Black'
            },
        }
    },
    fonts:{
        heading: "Sahel",
        body:"Vazirmatn",
        mono:"Sahel"
    }
})

export default customFont