# @webship.co/workspace-projects

The **Projects** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `projects/` folder (type `sites`), its settings file (`core/config/workspace.projects.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-projects
bash core/scripts/plugins.sh --activate projects --with-needs     # puts `projects` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install projects      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate projects` and `--install projects` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `projects-site-keeper` | Agent | `ai-agents/projects-site-keeper.md` | Works on a client project in `projects/` without putting it at risk: backup, a clone to try the change on, its Webship-js suite, its addresses; starts a new project from a builder |
| `projects-workflow` | Skill | `ai-skills/projects-workflow/` | How work is done in `projects/`: back up, clone, test, clear the clone; every command with its flags, the settings keys |
| `/projects-clone` | Command | `ai-commands/projects-clone.md` | `/projects-clone <project> [new name] [folder]`: backs the project up, clones it and says where the clone answers |
| `projects-backup-clone-and-test` | Prompt | `ai-prompts/projects-backup-clone-and-test.md` | A new session that backs a project up, clones it and runs the Webship-js suite on the clone |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

## The commands

| Command |
| --- |
| `cmd-drupal11-recommended-project.sh` |
| `cmd-drupal12-recommended-project.sh` |
| `cmd-drupalcms2-x-project.sh` |
| `cmd-tool-backup-project.sh` |
| `cmd-tools-add-users.sh` |
| `cmd-tools-cancel-users.sh` |
| `cmd-tools-checks.sh` |
| `cmd-tools-clone.sh` |
| `cmd-tools-hostnames.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |
| `cmd-tools-screen.sh` |
| `cmd-tools-testing.sh` |
| `cmd-webships3-0-x-project.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
