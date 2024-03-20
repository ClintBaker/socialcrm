import jwt from 'jsonwebtoken'
import { RequestHandler } from 'express'
import prisma from './db'
import bcrypt from 'bcrypt'

export const createJWT = (user: object) => {
  const secret = process.env.JWT_SECRET || 'secret'
  const token = jwt.sign(user, secret)
  return token
}

export const signup: RequestHandler = async (req, res, next) => {
  try {
    // hash password
    const hash = await new Promise((resolve, reject: any) => {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
    // create new user
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hash as string,
      },
    })
    // create token without password
    const token = createJWT({ email: newUser.email, name: newUser.name })

    res.status(201).send({
      message: 'user created',
      user: { email: newUser.email, name: newUser.name },
      token,
    })
  } catch (e) {
    res.status(500)
    return next(new Error('Unable to create user'))
  }
}
