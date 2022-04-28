import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { documentsState, singledocumentState } from "../atoms/documents";

export default function Article({ article }) {
  const [articles, setArticles] = useRecoilState(documentsState);
  const [singleArticle, setSingleArticle] = useRecoilState(singledocumentState);
  const router = useNavigate();

  return (
    <div className="flex justify-between">
      <div
        className="border p-2 hover:shadow-md hover:shadow-gray-400 hover:transition-all cursor-pointer w-full"
        onClick={() => {
          setSingleArticle({
            Id: article.Id,
            Title: article.Title,
            Body: article.Body,
          });
          router(`/ArticleDetails/${article.Id}`);
        }}
      >
        <p>
          <span className="text-red-500">Title : </span>
          {article.Title}
        </p>
        <p>
          {" "}
          <span className="text-blue-500">Description : </span> {article.Body}
        </p>
      </div>
      <button
        className="p-2 bg-red-500 ml-2 rounded-lg hover:scale-105 text-white"
        onClick={async (e) => {
          //e.preventDefault();
          let temparticles = articles;
          const item = temparticles.filter(
            (article1) => article1.Id !== article.Id
          );
          setArticles(item);
        }}
      >
        Delete
      </button>
    </div>
  );
}
