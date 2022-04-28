import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { useRecoilState } from "recoil";
import { documentsState } from "./atoms/documents";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [Id, setId] = useState(0);
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [articles, setArticles] = useRecoilState(documentsState);
  const router = useNavigate();

  const submitReq = async (e) => {
    e.preventDefault();

    setArticles((oldAricles) => [
      ...oldAricles,
      {
        Id: Math.floor(Math.random() * 101),
        Title,
        Body,
      },
    ]);

    router("/MainPage");
  };

  return (
    <>
      <Header />
      <div className="h-screen w-screen flex  justify-center items-center">
        <form className="h-1/3 w-1/2 flex flex-col border rounded-lg p-2 space-y-5">
          <input
            type="number"
            placeholder="Id is generated automatically by a random number generator to avoid same keys"
            className="w-full p-2 outline-none border placeholder:text-sm placeholder:text-gray-300"
            disabled
          />
          <input
            type="text"
            placeholder="Enter title"
            className="w-full p-2 h-1/2 outline-none border "
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter description"
            className="w-full p-2 h-1/2 outline-none border "
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <button
            className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
            onClick={submitReq}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateArticle;
