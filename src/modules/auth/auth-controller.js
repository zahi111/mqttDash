import AuthService from './auth-services';

export const singup = async ( req, res ) => {
  try {
    const user = await AuthService.register(req.body);
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({error: String(error)})
  }
}

export const login = (req, res, next) => {

  res.status(200).json(req.user.toAuthJSON());

  return next();
}