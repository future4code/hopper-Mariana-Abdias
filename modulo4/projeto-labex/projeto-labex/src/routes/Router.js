import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ListTrips from '../pages/ListTrips'
import AplicationForm from '../pages/AplicationForm'
import Login from '../pages/Login'
import AdminHome from '../pages/AdminHome'
import CreateTrip from '../pages/CreateTrip'
import TripDetails from '../pages/TripDetails'
import Error from '../pages/Error'

// Componentes de cada tela criados e associados à uma rota

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/trips/list'} element={<ListTrips />} />
        <Route path={'/trips/application'} element={<AplicationForm />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/admin/trips/list'} element={<AdminHome />} />
        <Route path={'/admin/trips/create'} element={<CreateTrip />} />
        <Route path={'/admin/trips/:id'} element={<TripDetails />} />
        <Route path={'*'} element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
