import { senatorData } from './senators.js'

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === 'R')

const democrats = senators.filter(senator => senator.party === 'D')

const females = senators.filter(senator => senator.gender === 'F') 

const males = senators.filter(senator => senator.gender === 'M') 

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate`)


console.log(`The most loyal repuclican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`)


console.log(`The most loyal democrat is ${loyalDemocrat.first_name} ${loyalDemocrat.last_name} from ${loyalDemocrat.state} who votes with republicans ${loyalDemocrat.votes_with_party_pct}% of the time.`)

console.log(`There are ${males.length} men in the Senate and ${females.length} women.`)


const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id === '412743') {
        senator.imgURL = `https://localhost:5500/images/cindy.jpg`
    }
    return senator
})

console.log(senWithPics)
let pictureDiv = document.querySelector('.container')

senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})

