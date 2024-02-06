const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 2000
app.use(cors())

const codChar = {
  "price": {
    "name": "Jonathan Price",
    "role": "Leader of the British SAS and Task Force 141",
    "voice actor": "Billy Murray",
    "image": "https://th.bing.com/th/id/OIP.Zk9p46xzA6bqlIv6Y6SPFgHaEK?rs=1&pid=ImgDetMain",
  },
  "soap": {
    "name": "Sergeant John MacTavish",
    "role": "Memeber of the British SAS and Task Force 141. Responsible for killing Imran Zakhaev.",
    "voice actor": "Kevin McKidd, Julian Wierzbicki and others.",
    "image": "https://th.bing.com/th/id/OIP.yWKGnWym6oz5ZhRnaOqbaQHaEK?rs=1&pid=ImgDetMain",
  },
  "frank": {
    "name": "Frank Woods",
    "role": "CIA operative and member of the Studies and Observations Group, who fought in the Cold War, the Vietnam War, and other covert operations.",
    "voice actor": "James C",
    "image": "https://th.bing.com/th/id/OIP.a5GYozwZ2NfL7emowO2E1QHaEK?rs=1&pid=ImgDetMain",
  },
  "shepherd": {
    "name": "General Shepherd",
    "role": "Commander of the US Army Rangers and the leader of the Shadow Company.",
    "voice actor": "Lance Henriksen",
    "image": "https://th.bing.com/th/id/R.cd833bd49fb98cab6f07c5df3606b0bd?rik=cgb2QXmCOFpjQw&pid=ImgRaw&r=0",
  },
  "nikolai": {
    "name": "Nikolai",
    "role": "Russian informant and friend of Price and soap, who provide intelligence, transportation, and equipment to the Task Force 141.",
    "voice actor": "Stefan Kapicic",
    "image": "https://th.bing.com/th/id/OIP.hNpAH-YTDLWdQZXegP85fgHaEK?rs=1&pid=ImgDetMain",
  },
  "alex mason": {
    "name": "Alex mason",
    "role": "CIA operative and a member of the Studies and Observation Group, Mason is the main protaganist of the Black Ops series",
    "voice actor": "Sam Worthington",
    "image": "https://th.bing.com/th/id/OIP.jxJuWarVYmgYg0OLRS-OJAHaJj?rs=1&pid=ImgDetMain",
  },
  "ghost": {
    "name": "Simon 'Ghost' Riley",
    "role": "A British special forces operator and a member of the Task Force 141.",
    "voice actor": "Craig Fairbrass",
    "image": "https://th.bing.com/th/id/OIP.OK34ajgYzcTgAjGSmmpOngHaEK?rs=1&pid=ImgDetMain",
  },
  "viktor": {
    "name": "Viktor Reznov",
    "role": "A Soviet soldier and a member of the Red Army, a fierce and patriotix warrior who fought in World War II and the Cold War",
    "voice actor": "Gary Oldman",
    "image": "https://th.bing.com/th/id/OIP.EOvL2n_Am-IdCAFsnKyNHQHaF7?rs=1&pid=ImgDetMain",
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/cod', (req, res) => {
  res.json(codChar)
})

app.get('/cod/:name', (req, res) => {
  const name = req.params.name.toLowerCase()
  if(codChar[name]) {
    res.json(codChar[name])
  } else {
    res.json({"error": "Sorry this API does not have information about the character you are searching for."})
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}.`)
})