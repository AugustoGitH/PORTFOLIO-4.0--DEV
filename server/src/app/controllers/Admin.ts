import { type Request, type Response } from 'express';

import Project from '../../database/models/Project';
import { TProject } from '../../database/models/types';
import { SchemaProject } from '../../database/Schemas/Project';
import Repositorie from '../../services/getRepositorieGit';
import {
  type TProjectEditabledSendByClient,
  type TProjectSubmitClient
} from '../../types/Project';

export default {
  async createProject(req: Request, res: Response) {
    const newProject: TProjectSubmitClient = req.body;
    const { repoId, repoLink } = newProject;

    const { error } = SchemaProject(req.body);
    if (error)
      return res.status(404).send({
        message: error.message
      });

    const repositorie = repoId ? await Repositorie.findOneById(repoId) : null;
    const techsRepo = repositorie
      ? await Repositorie.findTechnologies(repositorie.languages_url)
      : null;

    const project = {
      ...newProject,
      ...(repositorie && techsRepo && !repoLink
        ? {
            repoLink: repositorie.svn_url,
            repositoryTechnologiesPoints: techsRepo
          }
        : repoLink
        ? {
            repoLink
          }
        : {})
    };
    try {
      new Project(project).save();

      res.status(200).send({
        message: 'Projeto criado com sucesso!'
      });
    } catch (error) {
      console.log(`Ocorreu um erro ao criar um projeto! --------> ${error}`);
      res.status(500).send({
        message:
          'Ocorreu um erro interno no servidor ao tentar criar o seu projeto.'
      });
    }
  },
  async updateImages(req: Request, res: Response) {
    const { idProject, images } = req.body;
  },

  async getProjects(req: Request, res: Response) {
    try {
      const projects = await Project.find({});
      res.status(200).send({
        message: 'Projetos resgatados com sucesso!',
        data: projects
      });
    } catch (error) {
      console.log(`Ocorreu um erro ao resgatar projetos! --------> ${error}`);
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor ao buscar seus projetos.'
      });
    }
  },

  async updateProject(req: Request, res: Response) {
    const { idProject, ...valuesEdited }: TProjectEditabledSendByClient =
      req.body;

    const repositorie = valuesEdited.repoId
      ? await Repositorie.findOneById(valuesEdited.repoId)
      : null;
    const techsRepo = repositorie
      ? await Repositorie.findTechnologies(repositorie.languages_url)
      : null;

    try {
      Promise.all([
        Project.updateMany(
          { orderOfFive: valuesEdited.orderOfFive },
          { orderOfFive: 0 }
        ),
        Project.findByIdAndUpdate(idProject, {
          ...valuesEdited,
          ...(repositorie && techsRepo
            ? {
                repoLink: repositorie.svn_url,
                repositoryTechnologiesPoints: techsRepo
              }
            : {})
        })
      ]);
      res.status(200).send({
        message: 'Projeto atualizado com sucesso!'
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'Erro interno no servidor ao atualizar o processo!'
      });
    }
  },

  async getRepositories(req: Request, res: Response) {
    const repositories = await Repositorie.findAll();
    res.status(200).send({
      message: 'Repositorios resgatados com sucesso!',
      data: { repositories }
    });
  },

  async favoriteProject(req: Request, res: Response) {},

  async deleteProject(req: Request, res: Response) {
    const { idProject } = req.params;
    try {
      await Project.deleteOne({ _id: idProject });
      res.status(200).send({
        message: 'Projeto deletado com sucesso!'
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'Ocorreu um erro interno no servidor ao deletar projeto!'
      });
    }
  },

  async reloadRepoProject(req: Request, res: Response) {}
};
