import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumItem({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-4 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="font-light text-slate-200 text-sm">{desc}</p>
    </div>
  );
}