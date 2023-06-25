
import { LIKEDPROJECTS } from "../../../../../../../constants/localStorage";
import { TProject } from "../../../../../../../types/Project";
import ImagesCover from "./components/ImagesCover";
import { useState } from "react";
import * as S from "./styles";
import likeProjectService from "../../../../../../../services/authLevel/Public/likeProject";
import viewProjectService from "../../../../../../../services/authLevel/Public/viewProject";



const Project = ({ project }: { project: TProject }) => {
  const likedProjects: string[] = JSON.parse(localStorage.getItem(LIKEDPROJECTS) || "[]")
  const [isLiked, setIsLiked] = useState(likedProjects.includes(project._id))
  const [countLikes, setCountLikes] = useState(project.likes)
  const [countViews, setCountViews] = useState(project.views)

  const handleClickLikedProject = () => {
    const likedProjects: string[] = JSON.parse(localStorage.getItem(LIKEDPROJECTS) || "[]")
    if (likedProjects.includes(project._id)) {
      localStorage.setItem(LIKEDPROJECTS, JSON.stringify(likedProjects.filter(idProject => idProject !== project._id)))
      setIsLiked(false)
      setCountLikes(prevCounterLikes => prevCounterLikes !== 0 ? prevCounterLikes - 1 : 0)
      likeProjectService(project._id, "desfavorite")
    } else {
      localStorage.setItem(LIKEDPROJECTS, JSON.stringify([...likedProjects, project._id]))
      setIsLiked(true)
      setCountLikes(prevCounterLikes => prevCounterLikes + 1)
      likeProjectService(project._id, "favorite")
    }
  }

  const handleClickViewProject = () => {
    setCountViews(prevCounterViews => prevCounterViews + 1)
    viewProjectService(project._id)
  }



  return (
    <S.Project className="project">
      <ImagesCover
        cover={project.images.cover}
        images={project.images.images}
      />
      <S.Description>
        <ul className="technologies">
          {
            project.technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))
          }
        </ul>
        <h4>{project.type}</h4>
        <h2>{project.name}</h2>
        <nav>
          {
            project.websiteLink && (
              <a href={project.websiteLink} target="_blank" onClick={handleClickViewProject}>
                Visitar
                <i className="bx bxs-book-content"></i>
              </a>
            )
          }
          {
            project.videoLink && (
              <a href={project.videoLink} target="_blank" onClick={handleClickViewProject}>
                Preview
                <i className="bx bx-play-circle"></i>
              </a>
            )
          }
          {
            project.repoLink && (
              <a href={project.repoLink} target="_blank">
                Repositório
                <i className="bx bxl-gitlab"></i>
              </a>
            )
          }
        </nav>
        <ul className="statistics">
          <li className={`button-like ${isLiked ? "liked" : ""}`} onClick={handleClickLikedProject}>
            <i className="bx bxs-like"></i>
          </li>
          <li>{countLikes} {`curtida${countLikes === 1 ? "" : "s"}`}</li>
          <li>{countViews} {`visualizaç${countViews === 1 ? "ão" : "ões"}`}</li>
        </ul>
      </S.Description>
    </S.Project>
  );
};

export default Project;
