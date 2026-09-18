import * as request from '~/utils/request';

export const search = async (q) => {
    try {
        const res = await request.get('users', {
            params: {
                q,
            },
        });

        setSearchResult(res);

        setLoading(false);
    } catch (error) {
        setLoading(false);
    }
};
