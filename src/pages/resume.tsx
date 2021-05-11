import { MongoClient, Db } from 'mongodb';


function Resume({resume}){
  resume = JSON.parse(resume);
  return (
    <>
      {resume.pt}
    </>
  );
}


export async function getStaticProps() {
  const getResume = await getResumeDB();
  const resume = JSON.stringify(getResume);

  return ({props: {resume,},});
}

export default Resume;



/* --------------------------------------------------- */
let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParse: true,
    useUnifieldTopology: true,
  })

  const { URL } = require('url');
  const dbUrl = new URL(uri);
  const dbName = dbUrl.pathname.substr(1);

  const db = client.db(dbName);
  
  cachedDb = db;

  return db;
}

const getResumeDB = async () => {

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('im_resume');

  const resume = await collection.findOne()
  
  return resume;
}
/* --------------------------------------------------- */
