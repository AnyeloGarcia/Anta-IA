import React from "react";
import { Camera, Bot, BarChart } from "lucide-react";

export default function AntaIAHome() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-6" style={{ backgroundImage: "url('/mine-bg.jpg')" }}>
      <div className="bg-transparent text-white flex flex-col items-center mb-4">
        <img src="/antamina-icon.png" alt="Logo Antamina" className="w-12 h-12 mb-1" />
        <h1 className="text-2xl font-bold">Anta IA</h1>
      </div>
      <div className="flex flex-col items-center space-y-3 w-full max-w-xs">
        <button 
          onClick={() => window.location.href = '/camera-capture'}
          className="bg-[#007C8A] text-white text-sm w-full flex items-center justify-center space-x-2 py-2"
        >
          <Camera className="w-4 h-4" />
          <span>Identificación AC Subestandar</span>
        </button>
        <button className="bg-[#007C8A] text-white text-sm w-full flex items-center justify-center space-x-2 py-2">
          <Bot className="w-4 h-4" />
          <span>AntaBot</span>
        </button>
        <button className="bg-[#007C8A] text-white text-sm w-full flex items-center justify-center space-x-2 py-2">
          <BarChart className="w-4 h-4" />
          <span>Visualización</span>
        </button>
      </div>
      <div className="mt-4 text-white text-xs">
        <a href="/admin-login" className="underline">Administrador</a>
      </div>
    </div>
  );
}
