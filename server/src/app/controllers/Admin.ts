import { Request, Response } from 'express'
import Project from '../../database/models/Project'
import { TProjectSubmitClient } from '../../types/Project'
import getRepositorieGit from '../../services/getRepositorieGit'

export default {
  async createProject (req: Request, res: Response) {
    const { repoId, ...restProject }: TProjectSubmitClient = req.body
    const repositorie = await getRepositorieGit(repoId || 0)
    try {
      const newProject = {
        ...restProject,
        ...(repositorie || {})
      }
      const statusCreation = new Project(newProject).save()
      console.log(statusCreation)

      res.status(200).send({
        message: 'Projeto criado com sucesso!'
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao criar um projeto! --------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor ao tentar criar o seu projeto.'
      })
    }
  },
  async getProjects (req: Request, res: Response) {
    try {
      const projects = await Project.find({})
      res.status(200).send({
        message: 'Projetos resgatados com sucesso!',
        data: projects
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao resgatar projetos! --------> ${error}`)
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor ao buscar seus projetos.'
      })
    }
  },

  async updateProject (req: Request, res: Response) {
    const { fields, idProject } = req.body

    console.log(fields, idProject)

  },

  async getRepositories (req: Request, res: Response) {

  },

  async favoriteProject (req: Request, res: Response) {

  },

  async deleteProject (req: Request, res: Response) {

  },

  async reloadRepoProject (req: Request, res: Response) {

  }
}
