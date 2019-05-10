
import { 
    ScreenWidth, 
    ScreenHeight, 
    StreamColor, 
    ScreenPadding,
    TitleColor,
    pxToDp,
    BackDefaultColor
} from './UIUtils';

export {
    ScreenWidth,
    ScreenHeight,
    StreamColor,
    ScreenPadding,
    pxToDp,
    TitleColor,
    BackDefaultColor
}

export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })
