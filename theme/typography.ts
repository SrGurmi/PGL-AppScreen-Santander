import { Platform } from 'react-native';

const fontFamily = Platform.select({
    ios: 'System',
    android: 'System',
    default: 'System',
});

export default {
    family: fontFamily || 'System',
    size: {
        xs: 11,
        sm: 13,
        md: 16,
        lg: 18,
        xl: 22,
        xxl: 28,
        display: 34,
    },
    weight: {
        regular: '400' as const,
        medium: '600' as const,
        bold: '700' as const,
    },
};