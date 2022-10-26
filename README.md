# action-pr-assign-reviewers

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `github-token`

**Required** GitHub token.

## Example usage

```yaml
uses: RomansBermansRS/action-pr-assign-reviewers@v1.1
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  reviewers: user-name
  team-reviewers: slug/team-name
```