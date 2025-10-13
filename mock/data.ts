import { RecentTransaction } from '../types';

export const favoriteContact = {
    initials: 'AZ',
    name: 'Andamios Zurrones',
    phone: '666 777 888',
};

export const recentTxs: RecentTransaction[] = [
    {
        id: '1',
        dateLabel: '21 SEPT.',
        name: 'Arturo P.N.',
        concept: 'Cine',
        amount: 10.0,
        currency: '€',
    },
    {
        id: '2',
        dateLabel: '13 SEPT.',
        name: 'Andamios Zurrones S.L.',
        concept: 'cena esparramen',
        amount: -30.0,
        currency: '€',
    },
];