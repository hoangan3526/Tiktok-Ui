import * as request from '~/utils/request';

export const search = async (q) => {
    try {
        const res = await request.get('users', {
            params: {
                q,
            },
        });

        return res;
    } catch (error) {
        setLoading(error);
    }
};
