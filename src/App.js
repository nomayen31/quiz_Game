import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import QuizDetails from "./Components/QuizDetails/QuizDetails";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topics/Topics";

import Main from "./layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')  , element: <Home></Home> },
        
        
        { path: "/topics", loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')  , element: <Topics></Topics> },
        
        {path:'/home/:quizId', loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`) ,element:<QuizDetails></QuizDetails>},

        {path:'/topics/home/:quizId', loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`) ,element:<QuizDetails></QuizDetails>},
     
        {path:'/statistics', loader:()=> fetch('https://openapi.programming-hero.com/api/quiz/') , element:<Statistics></Statistics>},
        {path:'/blog', element:<Blog></Blog>},
      
      ],
    },
    {path:'*', element:<ErrorPage></ErrorPage>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
