import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { documentsState, singledocumentState } from "./atoms/documents";
import Article from "./components/Article";
import Header from "./components/Header";

const MainPage = () => {
  const [articles, setArticles] = useRecoilState(documentsState);
  const [singleArticle, setSingleArticle] = useRecoilState(singledocumentState);

  const router = useNavigate();

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-3  h-full w-screen ">
        <div className="w-3/4  border rounded-lg p-2 overflow-auto">
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
                  <Article article={article} />
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
  );
};

export default MainPage;
