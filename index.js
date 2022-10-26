import core from '@actions/core'
import github from '@actions/github'

try {
  const octokit = github.getOctokit(core.getInput('github-token'))
  const payload = github.context.payload
  const result = await octokit.rest.pulls.requestReviewers({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    pull_number: payload.pull_request.number,
    reviewers: core.getInput('reviewers').split(','),
    team_reviewers: core.getInput('team-reviewers').split(',')
  })
  console.log(123, result)
} catch (error) {
  core.setFailed(error)
}