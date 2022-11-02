const teamsArray = ['bob-team', 'mike-team']

const getTeam = team => {
  return new Promise((resolve,reject) => {
    resolve([{ login: team.split('-')[0] }])
 })
}
  
const results = await Promise.all(teamsArray.map(async team => {
  const members = await getTeam(team)
  return members.map(member => member.login)
}))

results.push(['bob', 'steve'])
const reviewers = Array.from(new Set(results.flat()))

console.log(reviewers)
