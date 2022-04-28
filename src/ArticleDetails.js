import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { documentsState, singledocumentState } from "./atoms/documents";

const ArticleDetails = () => {
  const [articles, setArticles] = useRecoilState(documentsState);
  const [singleArticle, setSingleArticle] = useRecoilState(singledocumentState);
  const { id } = useParams();

  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const router = useNavigate();

  const submitReq = async (e) => {
    e.preventDefault();

    const index = articles.findIndex((element) => element.Id == id);
    console.log(index);
    let tempArticles = JSON.parse(JSON.stringify(articles));
    tempArticles[index].Title = Title;
    tempArticles[index].Body = Body;

    setArticles(tempArticles);

    router("/MainPage");
  };

  const deleteReq = () => {
    const item = articles.filter((article) => article.Id != id);
    setArticles(item);
    router("/MainPage");
  };

  console.log(id);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 h-1/3 border rounded-lg p-2 flex flex-col space-y-3">
        <div className="h-1/3 w-full border rounded-lg p-2">
          <span className="font-semibold text-red-500">Title :</span>
          <input
            type="text"
            // defaultValue={articles[id].Title}
            defaultValue={singleArticle.Title}
            className="w-full outline-none "
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="h-1/3 w-full border rounded-lg p-2 flex-wrap">
          <span className="font-semibold text-blue-500">Description :</span>
          <input
            type="text"
            // defaultValue={articles[id].Body}
            defaultValue={singleArticle.Body}
            className="w-full outline-none "
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <button
            className="text-xl bg-orange-500 rounded-lg p-2 text-white hover:scale-105 "
            onClick={submitReq}
          >
            Add changes
          </button>
          <button
            className="text-xl bg-orange-500 rounded-lg p-2 text-white hover:scale-105 "
            onClick={deleteReq}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
