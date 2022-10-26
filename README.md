# action-pr-assign-reviewers

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Example usage

```yaml
uses: RomansBermansRS/action-pr-assign-reviewers@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```