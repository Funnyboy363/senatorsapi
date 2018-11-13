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