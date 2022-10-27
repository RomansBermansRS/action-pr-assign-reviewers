import core from '@actions/core'
import github from '@actions/github'

try {
  const octokit = github.getOctokit(core.getInput('github-token'))
  const payload = github.context.payload

  const reviewers = core.getInput('reviewers').split(',')
  const team_reviewers = core.getInput('team-reviewers').split(',')
  
  // TODO: for each team_reviewers call https://octokit.github.io/rest.js/v18#teams-list-members-in-org
  // BELOW PSEUDO CODE:
  /* 
  const team_members = []
  team_reviewers.forEach(async team => {
     const members = await octokit.rest.teams.listMembersInOrg({
      org,
      team_slug: team
    })
    team_members.push(members.map(member => member.login))
  })
  */

  const result = await octokit.rest.pulls.requestReviewers({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    pull_number: payload.pull_request.number,
    reviewers,
    team_reviewers
  })
} catch (error) {
  core.setFailed(error)
}
