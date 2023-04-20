import Project from '../../database/models/Project'
import { type Response, type Request } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export default {
  async verifyCredential (req: Request, res: Response) {
    const token = req.cookies[process.env.TOKEN_AUTHENTICATION_NAME]
    if (!token) {
      return res.send({
        message: 'Token não encontrado!',
        isAuthenticated: false
      })
    }
    try {
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
      res.send({
        message: 'Você possui a permissão necessária!',
        isAuthenticated: true
      })
    } catch (error) {
      res.send({
        message: 'Você não possui a permissão necessária!',
        isAuthenticated: false
      })
    }
  },
  async getProjects (req: Request, res: Response) {
    try {
      const projects = await Project.find({})
      res.status(200).send({
        message: 'Projetos resgatados com sucesso!',
        data: { projects }
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao buscar projetos na rota publica -------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor na tentativa de resgatar projetos.'
      })
    }
  },
  async login (req: Request, res: Response) {
    const { name, password }: { name: string, password: string } = req.body
    const { NAME_ADMIN, PASSWORD_ADMIN, TOKEN_SECRET, TOKEN_AUTHENTICATION_NAME } = process.env


    if (!name || !password || name !== NAME_ADMIN) {
      return res.status(401).send({
        message: 'Nome de usuário ou senha incorretos!'
      })
    }
    
    const passAndUserMatch = bcrypt.compareSync("13a5u7gwA$", PASSWORD_ADMIN)
    if (!passAndUserMatch) {
      return res.status(401).send({
        message: 'Nome de usuário ou senha incorretos!'
      })
    }

    try {
      const token = jwt.sign({
        adminName: name,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      }, TOKEN_SECRET)

      res.cookie(TOKEN_AUTHENTICATION_NAME, token, {
        secure: true,
        httpOnly: true
      })
      res.status(200).send({
        message: 'Bem-vindo Carrara!'
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao fazer login -------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor!'
      })
    }
  },

  async likeProject (req: Request, res: Response) {
    const { idProject, stateLike } = req.body
    const FAVORITE = 'favorite'
    const DESFAVORITE = 'desfavorite'

    try {
      const project = await Project.findById(idProject)
      if (!project) {
        return res.status(404).send({
          message: 'Projeto não encontrado'
        })
      }

      await Project.findByIdAndUpdate(idProject, {
        $inc: {
          likes: stateLike === FAVORITE ? 1 : stateLike === DESFAVORITE ? -1 : 0
        }
      })

      return res.status(200).send({
        message: 'O projeto foi curtido com sucesso!'
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao curtir projeto -------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor!'
      })
    }
  },

  async viewProject (req: Request, res: Response) {
    const { idProject } = req.body
    try {
      const project = await Project.findById(idProject)
      if (!project) {
        return res.status(404).send({
          message: 'Projeto não encontrado'
        })
      }

      await Project.findByIdAndUpdate(idProject, {
        $inc: { views: 1 }
      })

      res.status(200).send({
        message: 'O projeto foi visualizado com sucesso!'
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao visualizar projeto -------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor!'
      })
    }
  }
}
