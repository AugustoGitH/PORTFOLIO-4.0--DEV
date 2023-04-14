import * as S from "./styles";

const Project = () => {
  return (
    <S.Project>
      <S.ImagesCover>
        <div className="cover">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" />
        </div>
        <ul>
            <li>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"/>
            </li>
            <li>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"/>
            </li>
            <li>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"/>
            </li>
            <li>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"/>
            </li>
        </ul>
      </S.ImagesCover>
      <S.Description>
        <ul>
            <li>JAVASCRIPT</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h4>Lading Page</h4>
        <h2>CodeQuiz - Quiz Interativo</h2>
        <nav>
            <a href="">
                Visitar
                <i className='bx bxs-book-content'></i>
            </a>
            <a href="">
                Repositório
                <i className='bx bxl-gitlab' ></i>
            </a>
        </nav>
      </S.Description>
    </S.Project>
  );
};

export default Project;
