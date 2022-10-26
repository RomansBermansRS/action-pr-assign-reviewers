import core from '@actions/core'
import github from '@actions/github'

try {
  const octokit = github.getOctokit(core.getInput('github-token'))
  const context = github.context
  // const payload = JSON.stringify(context.payload, undefined, 2) 
  console.log('123', Object.keys(context))

  const result = await octokit.rest.pulls.requestReviewers({
    // owner, // context.owner,
    // repo, // context.repo,
    // pull_number, // context.payload.number,
    ...context,
    reviewers: core.getInput('reviewers'),
    team_reviewers: core.getInput('team-reviewers')
  });

} catch (error) {
  core.setFailed(error.message)
}