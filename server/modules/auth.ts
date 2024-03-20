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
    const token = createJWT({ email: newUser.email })

    res.status(201).send({
      message: 'user created',
      user: { email: newUser.email, name: newUser.name },
      token,
    })
  } catch (e: any) {
    // if the issue is not a unique email
    if (e.code === 'P2002') {
      res.status(400)
      return next(new Error('Email must be unique'))
    } else {
      res.status(500)
      return next(new Error('Unable to create user'))
    }
  }
}

export const login: RequestHandler = async (req, res, next) => {
  try {
    // find the user
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })
    // if user doesn't exist throw err
    if (!user) {
      res.status(403)
      return next(new Error('Username or password incorrect'))
    }
    // compare passwords
    const isMatch = await new Promise((resolve: any, reject: any) => {
      bcrypt.compare(
        req.body.password,
        user.password as string,
        (err, isMatch) => {
          if (err) reject(err)
          resolve(true)
        }
      )
    })
    // if no match
    if (!isMatch) {
      res.status(403)
      return next(new Error('Username or password incorrect'))
    }
    // get a token
    const token = createJWT({ email: user.email })
    // return user & token
    res.status(200).send({
      message: 'successfully signed in',
      user: { email: user.email, name: user.name },
      token,
    })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}
