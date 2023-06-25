import { useEffect, useState } from "react";
import { TReturnCompareEditValues } from "./types";
import { TProject, TProjectEditabled } from "../../../types/Project";
import useProjectsAdmin from "../../../stores/projectsAdmin";
import compareEditValues from "./utils/compareEditValues";
import verifyFormUpdateProject from "./utils/verifyFormUpdateProject";
import {
  updateProjectService,
  deleteProjectService,
} from "../../../services/authLevel/Admin";

const useEditProject = (project: TProject) => {
  const [originValues, setOriginValues] = useState({
    orderOfFive: project.orderOfFive,
    name: project.name,
    websiteLink: project.websiteLink,
    videoLink: project.videoLink,
    type: project.type,
    technologiesUsed: project.technologiesUsed,
    repoId: project.repoId,
  });

  const [valuesProject, setValuesProject] =
    useState<TProjectEditabled>(originValues);

  const [comparisons, setComparisons] =
    useState<TReturnCompareEditValues | null>(null);

  const [isEdited, setIsEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [blockInputs, setBlockInputs] = useState(false);

  const { deleteProject, updateProject } = useProjectsAdmin();

  useEffect(() => {
    const compare = compareEditValues(valuesProject, originValues);
    setComparisons(compare);
    setIsEdited(compare.modified);
  }, [valuesProject]);

  const addEditedValues = (attr: keyof TProjectEditabled, newValue: any) => {
    setValuesProject((prevValues) => ({
      ...prevValues,
      [attr]: newValue,
    }));
  };

  const handleReloadRepo = () => {
    console.log(project._id);
  };

  const handleDeleteProject = () => {
    setIsLoading(true);
    deleteProjectService(project._id).then((response) => {
      if (response.deleted) {
        setIsLoading(false);
        alert(response.message);
        deleteProject(project._id);
      }
    });
  };

  const handleUpdateProject = () => {
    const { error, message } = verifyFormUpdateProject(valuesProject);
    if (error) return alert(message);
    setIsLoading(true);

    updateProjectService({ ...valuesProject, idProject: project._id }).then(
      (response) => {
        alert(response.message);
        if (response.updated) {
          setIsLoading(false);
          resetUpdate();
          updateProject(project._id, valuesProject);
        }
      }
    );
  };

  const resetUpdate = () => {
    setOriginValues(valuesProject);
    setIsEdited(false);
    setBlockInputs(false);
  };

  const undoChanges = () => {
    setValuesProject(originValues);
  };

  return {
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    comparisons,
    handleUpdateProject,
    undoChanges,
    isLoading,
    isEdited,
    blockInputs,
  };
};

export default useEditProject;
