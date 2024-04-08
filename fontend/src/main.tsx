import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.css";
import "./global.css"

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Tạo một thể hiện của QueryClient
const queryClient = new QueryClient();

// Sử dụng ReactDOM.createRoot để render ứng dụng vào DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Bọc ứng dụng trong QueryClientProvider để cung cấp QueryClient cho các thành phần */}
    <QueryClientProvider client={queryClient}>
      {/* Sử dụng BrowserRouter để cung cấp routing cho ứng dụng */}
      <BrowserRouter>
        {/* Render ứng dụng chính */}
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
