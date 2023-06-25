import Checkboxes from "../../../../../../components/Checkboxes"
import LoaderDefault from "../../../../../../components/loaders/LoaderDefault"
import useEditProject from "../../../../../../hooks/useEditProject"
import { TProject } from "../../../../../../types/Project"
import { optionsTechProject, optionsTypeProject } from "../../../../configs"
import ControlButtons from "./components/ControlButtons"
import DisplayPositions from "./components/DisplayPositions"
import ImagesProject from "./components/ImagesProject"
import InputEdit from "./components/InputEdit"
import * as S from "./styles"
import { useState } from "react"





const Project = ({ project }: { project: TProject }) => {

  const {
    handleUpdateProject,
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    undoChanges,
    isLoading,
    isEdited,
    blockInputs
  } = useEditProject(project)

  return (
    <S.Project className="project">
      {
        isLoading && (
          <S.PopupLoading>
            <LoaderDefault color="light" />
          </S.PopupLoading>
        )
      }

      <div className="sub-project">
        <ImagesProject cover={project.images.cover} images={project.images.images} />
        <DisplayPositions value={valuesProject.orderOfFive} onChange={vl => addEditedValues("orderOfFive", vl)} />
        <div className="form-inputs-edit">
          <InputEdit
            placeholcer="Nome do projeto"
            edited={blockInputs}
            onChange={vl => addEditedValues("name", vl)}
            value={valuesProject.name}
          />
          <InputEdit
            placeholcer="Link do projeto"
            edited={blockInputs}
            onChange={vl => addEditedValues("websiteLink", vl)}
            value={valuesProject.websiteLink}
          />
          <InputEdit
            placeholcer="Link da preview"
            edited={blockInputs}
            onChange={vl => addEditedValues("videoLink", vl)}
            value={valuesProject.videoLink}
          />
          <InputEdit
            placeholcer="Id do repositório"
            edited={blockInputs}
            onChange={vl => addEditedValues("repoId", (vl === "" ? null : vl))}
            value={valuesProject.repoId || ""}
          />
        </div>
        <ControlButtons
          onReloadRepo={handleReloadRepo}
          onTrash={handleDeleteProject}
        />
      </div>
      <div className="sup-project">
        <Checkboxes
          label="Tipo de projeto"
          name="type"
          options={optionsTypeProject}
          value={valuesProject.type}
          onChange={vl => addEditedValues("type", vl.value)}
        />
        <Checkboxes
          label="Tecnologias e linguagens mais usadas"
          name="type"
          tagAnyone
          value={valuesProject.technologiesUsed}
          options={optionsTechProject}
          onChange={vl => addEditedValues("technologiesUsed", vl.value)}
        />
      </div>
      {
        isEdited && (
          <nav className="buttons-control-edit">
            <button onClick={handleUpdateProject}>
              <i className='bx bxs-save' ></i>
              Salvar alterações
            </button>
            <button onClick={undoChanges}>
              Desfazer alterações
            </button>
          </nav>
        )
      }
    </S.Project>
  )
}

export default Project