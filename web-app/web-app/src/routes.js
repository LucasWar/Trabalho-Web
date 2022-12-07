import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CursosList from './pages/Cursos/CursosList';
import CursoView from './pages/Cursos/CursoView';
import CursoAula from './pages/Cursos/CursoAula';

import CursosListAdm from './pages/Cursos/CursosListAdm';
import CursoCreate from './pages/Cursos/CursoCreate';
import CursoAulaAdmin from './pages/Cursos/CursoAulaAdmin';
import CursoAulaCreate from './pages/Cursos/CursoAulaCreate';
import CursoUpdate from './pages/Cursos/CursoUpdate';
import CursoAulaUpdate from './pages/Cursos/CursoAulaUpdate';
import CursosFavoriteList from './pages/Cursos/CursoFavoriteList';

export default function Router() {
  return useRoutes ([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "cursos",
      element: <CursosList />
    },
    {
      path: "cursos/:cursoId/aulas",
      element: <CursoAula />
    },
    {
      path: "cursos/aluno/:token/favoritos",
      element: <CursosFavoriteList />
    },
    {
      path: "cursos/:cursoId/cursoView",
      element: <CursoView />
    },
    {
      path: "/admin",
      element: <CursosListAdm />
    },
    {
      path: "/admin/curso/create",
      element: <CursoCreate />
    },
    {
      path: "/admin/curso/:cursoId/update",
      element: <CursoUpdate />
    },
    {
      path: "/admin/curso/:cursoId/aulas/:aulaId/update",
      element: <CursoAulaUpdate />
    },
    {
      path: "/admin/curso/:cursoId/aulas/create",
      element: <CursoAulaCreate />
    },
    {
      path: "/admin/curso/:cursoId/aulas",
      element: <CursoAulaAdmin />
    },
    {
      path: "admin/cursos/:cursoId/cursoPage",
      element: <CursoView />
    },
    {
      path: "admin/cursos/:cursoId/cursoUpdate",
      element: <CursoView />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    },
  ]);
}