---
name: projects-workflow
description: How work is done in the `projects/` folder of the Webship Workspace — how a client project is backed up, cloned to try a change, tested with Webship-js and checked, which `cmd-*.sh` starts a new project, the flags of each command, and the settings keys of the folder. Use when asked to "back up this project", "clone the project before the update", "run the project's tests", "start a new client project", or when a command of `projects/` is about to be run.
argument-hint: '[what you are about to do in projects]'
---

# projects-workflow

`~/workspace/projects` is the Projects folder of a Webship Workspace (container-based, DDEV by default).
Projects are client projects: a site built on a distribution rather than the distribution itself, work somebody depends on. It comes with the Projects plugin (`@webship.co/workspace-projects`), which places the commands below in the
folder. Every command finds the workspace from its own path; run it from the folder, and read
`bash <command> --help` before quoting a flag.

## The order of work

1. **Back up first**: `bash cmd-tool-backup-project.sh mysite` (the folder and the database, into
   `backups/projects/`).
2. **Try a change on a clone**, never on the project itself:
   `bash cmd-tools-clone.sh mysite --to mysite2`, or into another folder with
   `--target-workspace`. For a git checkout, `--worktree` makes the clone a branch of the same
   repository.
3. **Test** the clone, then the project: `bash cmd-tools-testing.sh mysite2 --dry-run`,
   `bash cmd-tools-testing.sh mysite2 --run`; `bash cmd-tools-checks.sh mysite2 --list` shows the
   code-quality checks it declares.
4. **Clear the clone**, after asking: `bash cmd-tools-remove.sh mysite2`. The project stays.

A **new** project starts from a builder: `bash cmd-drupal11-recommended-project.sh mysite --install`.
A builder deletes a project of the same name first: never give it the name of a project that exists.

## Builders

| Builder | Builds | Flags |
| --- | --- | --- |
| `cmd-drupal11-recommended-project.sh` | Drupal 11 (latest) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal12-recommended-project.sh` | Drupal 12 (latest) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupalcms2-x-project.sh` | Drupal CMS 2 (latest) | `--add-users` `--install` `--php-version` |
| `cmd-webships3-0-x-project.sh` | Webships 3.0.x | `--add-users` `--php-version` `--template` |

`--install` installs the site (without it the installer waits at the address); `--add-users` adds
the default accounts of the distribution. A builder deletes a project of the same name first.

## Tools

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-tool-backup-project.sh` | An item as an archive and its database as a dump, into `backups/projects/` | none |
| `cmd-tools-add-users.sh` | Adds the default accounts of a distribution to a site: `<site> <distribution>` | none |
| `cmd-tools-cancel-users.sh` | Removes those accounts again: `<site> <distribution>` | none |
| `cmd-tools-checks.sh` | Runs the code-quality checks an item's `package.json` declares; `--list` prints the plan and runs nothing | `--browser` `--e2e` `--fail-fast` `--install` `--list` `--only` `--runner` `--skip` |
| `cmd-tools-clone.sh` | Folder and database under a new name, here or in another folder | `--branch` `--extra-hostname` `--no-build-copy` `--no-db` `--target-workspace` `--to` `--with-workspace-hostname` `--worktree` |
| `cmd-tools-hostnames.sh` | The addresses a site answers at, and one more | `--add` `--remove` `--start` `--with-workspace` |
| `cmd-tools-reclaim.sh` | Disk held by projects whose folder is gone: a dry run unless `--apply` | `--apply` `--keep-days` `--list-protected` `--only` |
| `cmd-tools-remove.sh` | Containers, volumes and folder together; refuses work that is on no remote unless `--force` | `--backup` `--force` `--orphans` |
| `cmd-tools-screen.sh` | A detached session with a log the dashboard follows | `--follow` `--list` `--log` `--run` `--stop` |
| `cmd-tools-testing.sh` | Sets the Webship-js testing stack up on a site, or runs its suite in the site's container | `--browser` `--configure` `--dry-run` `--headed` `--path` `--retry` `--run` `--tags` |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.projects.settings.yml` | The folder under the workspace root: `projects` |
| `type` | `core/config/workspace.projects.settings.yml` | `sites`: the rows of the page are built sites, with the Build, Tests, Checks, Users, Backup and Remove actions |
| `composer` | `core/config/workspace.projects.settings.yml` | `full`: the COMPOSER menu may install and update here, in the site's container |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.projects.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `projects` is on it once the plugin is activated |
| `account.name`, `account.mail` | `core/config/settings.yml` | The workspace account: the administrator of every site a builder installs |

## Rules

- Containers only: never `composer`, `drush`, `php`, `npm` or `mysql` on the host for a site. In the
  site's folder: `ddev composer …`, `ddev drush …`, `ddev export-db --file=…`, `ddev start -y`,
  `ddev stop` (no `-y`).
- Never write database settings into `settings.php`.
- A project is somebody's work: back it up before a change (`bash cmd-tool-backup-project.sh mysite`), try the change on a clone, and never remove or rebuild one unasked.

The Projects plugin places these beside this one, each in the workspace folder of its kind: the agent `projects-site-keeper` (`ai-agents/`), the command `/projects-clone` (`ai-commands/`) and the prompt `projects-backup-clone-and-test` (`ai-prompts/`).
