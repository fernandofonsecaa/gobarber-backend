interface IMailConfig {
    driver: 'ethereal' | 'ses';

    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',
    defaults: {
        from: {
            email: 'fernando@sorbigodes.com',
            name: 'fernando de Sor Bigodes',
        },
    },
} as IMailConfig;
