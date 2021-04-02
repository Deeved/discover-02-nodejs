const express = require('express')
const routes = express.Router()

const views_path = __dirname + '/views/'

const profile = {
  name: 'Deeved Hiuston',
  avatar: 'https://avatars.githubusercontent.com/u/64809323?v=4',
  monthlyBudget: 4000,
  hoursOfDays: 8,
  daysOfWeek: 5,
  vocationOfYears: 4
}

// req -> request, res ->  response
routes.get('/', (req, res) => res.render(views_path + "index"))
routes.get('/job', (req, res) => res.render(views_path + "job"))
routes.get('/job/edit', (req, res) => res.render(views_path + "job-edit"))
routes.get('/profile', (req, res) => res.render(views_path + "profile", {profile}))
routes.get('/index', (req, res) => res.redirect("/"))

module.exports = routes