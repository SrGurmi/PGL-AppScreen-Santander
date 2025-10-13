import React, { ReactNode } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import shadows from '../theme/shadows';

type Props = {
    children: ReactNode;
    onPress?: () => void;
    style?: any;
};

export default function ActionCard({ children, onPress, style }: Props) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }, style]}>
            <View>{children}</View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 14,
        padding: spacing.lg,
        marginVertical: spacing.sm,
        ...shadows.card,
    },
});