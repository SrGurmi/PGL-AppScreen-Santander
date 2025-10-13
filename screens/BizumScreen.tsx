import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import Avatar from '../components/Avatar';
import RecentItemCard from '../components/RecentItemCard';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';
import { favoriteContact, recentTxs } from '../mock/data';

export default function BizumScreen() {
    return (
        <View style={styles.root}>
            <Header
                title="Bizum"
                onBack={() => {}}
                onSearch={() => {}}
                onMenu={() => {}}
                onSettings={() => {}}
            />
            <ScrollView
                contentContainerStyle={{ paddingBottom: spacing.xxl }}
                scrollEnabled={false}
            >
                <View style={styles.cardsRow}>
                    <ActionCard style={[styles.card, { flex: 1 }]}>
                        <View style={styles.actionHeader}>
                            <Ionicons name="trending-up" size={30} color={colors.primary} />
                        </View>
                        <Text style={styles.cardTitle}>Nuevo envío</Text>
                        <Text style={styles.cardSubtitle}>Envía dinero a un teléfono móvil</Text>
                    </ActionCard>

                    <ActionCard style={[styles.card, { flex: 1 }]}>
                        <View style={styles.actionHeader}>
                            <Avatar initials={favoriteContact.initials} size={56} />
                        </View>
                        <Text style={styles.contactName}>{favoriteContact.name}</Text>
                        <Text style={styles.phone}>{favoriteContact.phone}</Text>
                    </ActionCard>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Bizum recientes</Text>
                    <Text style={styles.sectionSubtitle}>Reutiliza un envío o consulta el histórico</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
                        <Ionicons
                            name="eye-outline"
                            size={20}
                            color="#167371"
                            style={{ marginRight: 4, top: 4 }}
                        />
                        <Text style={styles.link}>Ver histórico</Text>
                    </View>
                </View>


                <View style={styles.grid}>
                    {recentTxs.map((tx) => (
                        <RecentItemCard key={tx.id} item={tx} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg, },
    cardsRow: {
        flexDirection: 'row',
        gap: spacing.md,
        paddingHorizontal: spacing.lg,
        backgroundColor: colors.primary,

    },
    card: {
        minHeight: 160,
    },
    actionHeader: {
        marginBottom: spacing.lg,
    },
    cardTitle: {
        fontSize: typography.size.xl,
        fontWeight: typography.weight.bold,
        color: colors.text,
        marginBottom: spacing.xs,
    },
    cardSubtitle: {
        color: colors.textMuted,
        fontSize: typography.size.lg,
    },
    contactName: {
        fontSize: typography.size.xl,
        fontWeight: typography.weight.bold,
        color: colors.text,
        marginTop: spacing.sm,
    },
    phone: {
        marginTop: spacing.xs,
        fontSize: typography.size.xl,
        color: colors.text,
        letterSpacing: 0.2,
    },
    sectionHeader: {
        paddingHorizontal: spacing.lg,
        marginTop: spacing.xl,

    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: typography.weight.bold,
        color: colors.text,
    },
    sectionSubtitle: {
        marginTop: spacing.sm,
        fontSize: typography.size.xl,
        color: colors.textMuted,
    },
    link: {
        marginTop: spacing.sm,
        color: colors.link,
        fontSize: typography.size.xl,
        fontWeight: typography.weight.bold,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.md,
        paddingHorizontal: spacing.lg,
        marginTop: spacing.md,
    },
});