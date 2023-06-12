import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import WorkExperience from "./components/work-experience/workExperience";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contacts",
                element: <Contacts />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "experience",
                element: <WorkExperience />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "*",
                element: <Navigate to="/home" />,
            }

        ]
    }
]);
