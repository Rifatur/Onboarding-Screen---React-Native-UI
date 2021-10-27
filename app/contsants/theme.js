import { Dimensions } from 'react-native';

const{width,height} = Dimensions.get("window");


const COLORS ={
    dark:'#000',
    light:'#a5a5a5',
    white:'#FFFFFF',
    primary: '#28388f',
    secondary: '#64beff',
    pink: '#ff2d5f',
    lightprimary:'rgba(139, 161, 191, 0.41)',
    lightprimary2:'rgba(139, 161, 191, 0.21)'
};
export default COLORS;

export const SIZES = {
    //global
    base:8,
    font:14,
    radius:12,
    padding: 24,

    //fontsize

    h1:30,
    h2:24,
    h3:16,
    h4:14,

    body1:30,
    body2:22,
    body3:15,
    body4:14,


    width,
    height

};

