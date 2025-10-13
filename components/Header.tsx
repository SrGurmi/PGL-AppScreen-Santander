import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

type Props = {
    title: string;
    onBack?: () => void;
    onSearch?: () => void;
    onMenu?: () => void;
    onSettings?: () => void;
    onClose?: () => void;
};

export default function Header({ title, onBack, onSearch, onMenu, onSettings, onClose }: Props) {
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <View style={styles.row}>
                <Pressable onPress={onBack} hitSlop={10} style={styles.iconBtn}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.right}>
                    <Pressable onPress={onSearch} style={styles.iconBtn}>
                        <Ionicons name="search" size={22} color="white" />
                    </Pressable>
                    <Pressable onPress={onMenu} style={styles.iconBtn}>
                        <Ionicons name="menu" size={26} color="white" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.settingsRow}>
                <Image source={ require("../assets/rocket-icon.jpg")} style={styles.iio} />
                <Pressable onPress={onSettings} style={styles.settingsBtn}>
                    <Ionicons name="settings-outline" size={30} color="white" />
                    <Text style={styles.settingsText}>Ajustes</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xl, // Increased from spacing.lg to add more space below the settings row
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBtn: {
        padding: spacing.sm,
    },
    title: {
        color: 'white',
        fontSize: typography.size.xl,
        fontWeight: typography.weight.bold,
        flex: 1,
        textAlign: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    settingsRow: {
        marginTop: spacing.md,
        alignItems: 'flex-end',
        experimental_backgroundImage: "../assets/rocket-icon.jpg"
    },
    settingsBtn: {
        alignItems: 'center',
        gap: 6,
    },
    settingsText: {
        color: 'white',
        fontSize: typography.size.lg,
        fontWeight: typography.weight.bold,
    },
    closeText: {
        color: 'white',
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    iio:{
    position: 'absolute',
        width: '100%',
    },
});