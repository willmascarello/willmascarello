
import { Menu } from "../components/Menu";

function Skills({resume}){
  return (
    <>
      {resume.pt}
      
      <Menu />
    </>
  );
}


export async function getStaticProps() {
  // let resume = null;
  // const router = useRouter();
   
  // console.log({ basePath: router.basePath}); 
  
  const res = await fetch('http://localhost:3000/api/resume');
  const resume = await res.json();
  console.log(resume);


  return ({props: {resume,},});
}

export default Skills;