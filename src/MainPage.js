import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usernameState } from "./atoms/credentialAtom";
import { documentsState } from "./atoms/documents";
import Article from "./components/Article";
import Header from "./components/Header";

const MainPage = () => {
  // const [articles, setArticles] = useRecoilState(documentsState);
  const articles = useRecoilValue(documentsState);
  // const [email, setEmail] = useRecoilState(usernameState);
  const email = useRecoilValue(usernameState);
  const [loading, setLoading] = useState(true);
  const [pro, setPro] = useState(0);

  const router = useNavigate();

  useEffect(() => {
    if (!email) {
      router("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPro(25);
    }, "1000");
    setTimeout(() => {
      setPro(50);
    }, "2000");
    setTimeout(() => {
      setPro(75);
    }, "3000");
    setTimeout(() => {
      setPro(100);
    }, "4000");

    setTimeout(() => {
      setLoading(false);
    }, "5000");
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center  ">
          <progress
            className="progress progress-success w-96 transition-all "
            value={pro}
            max="100"
          ></progress>
        </div>
      ) : (
        <div>
          <Header />
          <div className="flex justify-center mt-3  h-full w-screen ">
            <div className="w-3/4  border rounded-lg p-2 overflow-auto hover:shadow-xl shadow-black hover:transition-all">
              <div className=" flex justify-around mb-4">
                {" "}
                <span className="text-center text-4xl font-semibold">
                  Document List
                </span>
                <button
                  className="bg-blue-500 text-white font-semibold p-2 rounded-lg active:scale-90"
                  onClick={() => router("/CreateArticle")}
                >
                  ADD
                </button>
              </div>
              {articles.length !== 0 ? (
                <>
                  <div className="flex flex-col space-y-3 ">
                    {articles.map((article, key) => (
                      <Article article={article} key={key} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="h-20  mt-7 p-2">
                  <p className="h-full text-center text-gray-400">
                    No document found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
