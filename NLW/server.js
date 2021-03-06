const proffys = [
	{
	name:"Diego Fernandes", avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
	whatsapp:"3255415454",
	bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.",
	subject:Química,
	cost:"20",
	weekday:[0],
	time_from:[720],
	time_to:[1220]
	}
	
	{
	name:"Dani Fernandes", avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
	whatsapp:"3255415454",
	bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.",
	subject:Química,
	cost:"20",
	weekday:[0],
	time_from:[720],
	time_to:[1220]
	}
]

//para fazer mais um professor, só seguir os passos acima!!

const subjects =[
	"Artes",
	"Biologia",
	"Ciências",
	"Educação física",
	"Física",
	"Geografia",
	"História",
	"Matemática",
	"Português",
	"Química",
]

const weekdays=[

	"Domingo",
	"Segunda-Feira",
	"Terça-Feira",
	"Quarta-Feira",
	"Quinta-Feira",
	"Sexta-Feira",
	"Sábado",
]

function getSubject(subjectNumber){
	const position = +subjectNumber-
	return subjects[position]
}

function pageLanding(req, res){
	return res.render("index.html")
}
function pageStudy(req, res){
	const filters = req.query
	return res.render("study.html",{proffys, filters, subjects,weekdays})
}

function pageGiveClasses(req, res){
	const data=req.query
	const isNotEmpty = Object.keys(data).lenght != 0

	if(isNotEmpty){
		data.subject = getSubject(data.subject)
		
		proffys.push(data)
		return rex.redirect("/study")
	}
	

	return res.render("give-classes.html",{subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views'){
	espress: server,
	noCache: true,
}

server
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)