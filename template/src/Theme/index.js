import {Appearance} from 'react-native';
import {DarkColors} from './Dark';
import {LightColors} from './Light';
const colorScheme = Appearance.getColorScheme();
export const Colors = colorScheme === 'dark' ? DarkColors : LightColors;
// TODO - Agregar un listener para escuchar cuando cmabio el scheme de colores del OS
