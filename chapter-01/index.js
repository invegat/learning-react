//jshint esnext:true

var handler = i => alert(`This is box # ${i}`)
var
    container = document.getElementById('container')

for (let i=0; i<5; i++) {
  let div = document.createElement('p')
  let h1 = document.createElement('h1')
  let newContent = document.createTextNode(`i:${i}`);
  h1.appendChild(newContent)
  div.onclick = () => handler(i)
  div.appendChild(h1)
  container.appendChild(div)
}
const insideFn = logger =>
  logger(
   "They can be sent to other functions as arguments")

insideFn(message => console.log(message))

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () =>
       (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        reject(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()
})
getFakeMembers(5).then(
  members => console.log(members),
  err => console.error(
    new Error("cannot load members from randomuser.me")))

const userLogs = userName => message =>
        console.log(`${userName} -> ${message}`)

const ulog = userLogs("grandpa23")

    ulog("attempted to load 20 fake members")
    getFakeMembers(20).then(
        members => ulog(`successfully loaded ${members.length} members`),
        error => ulog("encountered an error loading members")
    )

  const countdown = (value, fn, delay=1000) => {
        fn(value)
        return (value > 0) ?
            setTimeout(() => countdown(value-1, fn), delay) :
            value
    }

    const clog = value => console.log(value)
    countdown(10, clog);

    const deepPick = (fields, object={}) => {
       const [first, ...remaining] = fields.split(".")
       return (remaining.length) ?
           deepPick(remaining.join("."), object[first]) :
           object[first]
    }

    var dan = {
        type: "person",
        data: {
          gender: "male",
          info: {
            id: 22,
            fullname: {
              first: "Dan",
              last: "Deacon"
            }
          }
        }
      }
 var newDiv = document.createElement("p");
    newDiv.appendChild(document.createTextNode('dan type:' + deepPick("type", dan)))                      // "person"
    container.appendChild(newDiv)
    newDiv = document.createElement("p");
    newDiv.appendChild(document.createTextNode('dan first:' + deepPick("data.info.fullname.first", dan)))  // "Dan"
    container.appendChild(newDiv)
