
import { Menu } from "../components/Menu";

function Skills({skills}){
  
  skills = JSON.parse(skills);
  return (
    <>
      {skills.skills}
      <Menu />
    </>
  );
}


export async function getStaticProps() {

  const skills = JSON.stringify({skills: 'Programador, UX/UI Designer, Fotografo, Game Designer, Aventureiro'});

  return ({props: {skills,},});
}

export default Skills;