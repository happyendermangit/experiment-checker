# experiment checker docs

SOON! i'm working in it


### How it works...??? 
- The experiment checker tool checks if a specific experiment is enabled for a guild.
- Use the `-t experiment_checker experiment_name:guild_id` command to check if an experiment is enabled for a guild [`(click here for the list)`](/list.md). 
- If the experiment is in the [`experiments.js`](/experiments.js) file, the tool encodes the input using the [`MurmurHash3`](https://en.wikipedia.org/wiki/MurmurHash) algorithm and checks if the resulting number falls within the experiment's - rollout members range that does not include the [`bucket`](/buckets.md) -1.
- The tool returns a success message if the number falls within the `range` and a failure message if it does not.
