import * as request from '~/utils/request';

export const search = async () => {
    try {
        const res = await request.get('users', {
            params: {
                q: debounced,
            },
        });

        setSearchResult(res);

        setLoading(false);
    } catch (error) {
        setLoading(false);
    }
};
