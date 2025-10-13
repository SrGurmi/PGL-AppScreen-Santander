export type RecentTransaction = {
    id: string;
    dateLabel: string;
    name: string;
    concept?: string;
    amount: number;
    currency?: string;
};