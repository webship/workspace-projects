---
description: Clone a client project of the projects/ folder of the Webship Workspace under a new name to try a change on, after backing the project up, and say where the clone answers.
argument-hint: '<project> [new name] [folder]'
---

# /projects-clone

Clone the project of `~/workspace/projects` named in: `$ARGUMENTS`

The arguments are the text typed after the command: the first word is the project (its folder
name in `projects/`), the second word is the name of the clone (`<project>2` when it is left
out), and a third word is another sites folder to put the clone in. With no project, stop and
ask for one: `ls -d ~/workspace/projects/*/.ddev` lists the candidates. The workspace is
container-based (DDEV by default); nothing is run on the host for a project.

## 1. Back the project up

```bash
cd ~/workspace/projects
bash cmd-tool-backup-project.sh <project>
```

The folder and the database land in `backups/projects/`. If the backup fails, stop.

## 2. Make sure the new name is free

```bash
ls -d ~/workspace/*/<new name> 2>/dev/null
ddev list | grep -w <new name>
```

## 3. Clone

```bash
bash cmd-tools-clone.sh --help
bash cmd-tools-clone.sh <project> --to <new name>
bash cmd-tools-clone.sh <project> --to <new name> --target-workspace <folder>
```

Use the second form when a folder was given. Run it once. If it fails, show the line that failed
and stop: the project itself is not touched by a clone.

## 4. Report

The backup that was written, the clone's folder and address (`https://<new name>.ddev.site`), and
the commands that go on from here:

```bash
bash cmd-tools-testing.sh <new name> --run     # its Webship-js suite, when it has one
bash cmd-tools-remove.sh <new name>            # when the change was tried
```

Never remove or rebuild the project itself. For the change and its tests, hand over to the
`projects-site-keeper` agent; the `projects-workflow` skill lists every command of the folder.

Before you write or change a scenario, or read a failed run, read the book *Automated Functional
Testing Recipes* (its `README.md`, then the matching chapter):
`.claude/automated-functional-testing-recipes/` in the project,
`~/.claude/automated-functional-testing-recipes/`, or
https://github.com/webship/webship-js-ai-agent/tree/2.0.x/automated-functional-testing-recipes
