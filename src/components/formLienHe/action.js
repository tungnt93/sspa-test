import api from '../../utils/service/api';

export function subMitContact(data = {}) {
    return api({ method: 'post', url: `/app-register/register`, data});
}