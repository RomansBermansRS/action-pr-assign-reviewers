import core from '@actions/core'
import github from '@actions/github'

try {
  const octokit = github.getOctokit(core.getInput('github-token'))
  const payload = github.context.payload

  const usersArray = core.getInput('reviewers').split(',')
  const teamsArray = core.getInput('team-reviewers').split(',')

  const results = await Promise.all(teamsArray.map(async team => {
    const slug = team.split('/')[1]
    const members = await octokit.rest.teams.listMembersInOrg({
      org: 'RevelStokeSec',
      team_slug: slug
    })
    return members.map(member => member.login)
  }))

  results.push(usersArray)
  const reviewers = Array.from(new Set(results.flat()))

  const result = await octokit.rest.pulls.requestReviewers({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    pull_number: payload.pull_request.number,
    reviewers
  })
} catch (error) {
  console.log(error, error.message)
  core.setFailed(error)
}
