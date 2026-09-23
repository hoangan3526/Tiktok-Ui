import * as httpRequest from '~/utils/httpRequest';

export const search = async (q) => {
    try {
        const res = await httpRequest.get('users', {
            params: {
                q,
            },
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
