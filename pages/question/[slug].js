import SDK from "weavedb-node-client";
// import WeaveDB from "weavedb-client";
const contractTxId = "sPyXyPDKw9uKFs43y7HFvsnKUE7bht3DkBNKA5UcV_o";

export async function getServerSideProps({ query }) {
  const db = new SDK({
    contractTxId: "sPyXyPDKw9uKFs43y7HFvsnKUE7bht3DkBNKA5UcV_o",
    rpc: "localhost:8080",
  });
  return {
    props: {
      question: (
        await db.get("Questions", ["slug"], ["slug", "=", query.slug])
      )[0],
    },
  };
}


export default function Question({ jsondata, question }) {
  return (
    <div className="flex flex-col ml-10 text-black">
      {/* {jsondata} */}
      <div className="text-5xl font-bold my-10">
      {question && question.title!=undefined?(<>{question.title}</>):(<>
      </>)}
      </div>
      
      <div className="text-2xl mb-10">
      {question && question.question!=undefined?(<>{question.question}</>):(<>
      </>)}
      </div>
      
      <div className="" >Vote : 
      
      {question && question.vote!=undefined?(<>{question.vote}</>):(<>
      </>)}
      </div>
    </div>
  );
}
