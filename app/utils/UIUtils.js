import { Platform, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

// UI 默认给图是 640
const uiWidthPx = 750;

export const ScreenWidth = width;       // 屏幕宽度
export const ScreenHeight = height;     // 屏幕高度
export const ScreenPadding = 30;        // 屏幕边框间距
export const StreamColor = 'rgba(255,218,68,1)'; // 主流颜色
export const TitleColor = '#282828';    // 文本颜色
export const TitleSize = 15;            // 字体大小
export const BackDefaultColor = 'rgba(244,244,244,1)';  // 背景颜色

// 58 app 只有竖屏模式，所以可以只获取一次 width


export function pxToDp(uiElementPx) {
    return uiElementPx *  width / uiWidthPx;
}