# @webship/workspace-projects

The **Projects** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `projects/` folder (type `sites`), its settings file (`core/config/workspace.projects.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-projects
bash core/scripts/plugins.sh --activate projects     # puts `projects` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install projects      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

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
| `cmd-tools-graphify.sh` |
| `cmd-tools-hostnames.sh` |
| `cmd-tools-obsidian.sh` |
| `cmd-tools-ragify.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |
| `cmd-tools-screen.sh` |
| `cmd-tools-testing.sh` |
| `cmd-webships3-0-x-project.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
