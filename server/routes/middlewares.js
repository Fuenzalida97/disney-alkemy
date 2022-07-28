const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if (!req.headers['user-token']) {
        return res.json({ error: 'Se necesita incluir el user-token en cabecera ' });
    }
    const userToken = req.headers['user-token'];
    let payload = {};
    try {
        payload = jwt.decode(userToken, 'TOKEN');
    } catch {
        return res.json({ error: 'El token es incorrecto' });
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'El token a expirado, vuelva a iniciar sesión' });
    }

    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken: checkToken
}