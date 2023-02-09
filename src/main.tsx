import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import CreateContextProvider from "./context/shopContext";
import { QueryClientProvider, QueryClient } from 'react-query'
import "./main.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CreateContextProvider>
        <Router />
      </CreateContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
