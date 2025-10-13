import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';
import shadows from '../theme/shadows';
import { RecentTransaction } from '../types';

type Props = { item: RecentTransaction; };

export default function RecentItemCard({ item }: Props) {
    const isOut = item.amount < 0;
    return (
        <View style={styles.card}>
            <Text style={styles.date}>{item.dateLabel}</Text>
            <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
            {item.concept ? <Text style={styles.concept} numberOfLines={2}>{item.concept}</Text> : null}
            <View style={{ flex: 1 }} />
            <Text style={[styles.amount, isOut ? styles.amountOut : styles.amountIn]}>
                {isOut ? '' : ''}{item.amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.currency || '€'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 14,
        padding: spacing.lg,
        width: '48%',
        minHeight: 180,
        ...shadows.card,
    },
    date: {
        color: colors.primary,
        fontWeight: '700',
        marginBottom: spacing.sm,
    },
    name: {
        fontSize: typography.size.lg,
        fontWeight: typography.weight.bold,
        color: colors.text,
    },
    concept: {
        marginTop: spacing.sm,
        fontSize: typography.size.md,
        color: colors.text,
    },
    amount: {
        marginTop: spacing.lg,
        fontSize: 28,
        fontWeight: '800',
    },
    amountIn: {
        color: colors.text,
    },
    amountOut: {
        color: colors.text,
    },
});