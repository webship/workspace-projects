Back a client project up, clone it, and run its Webship-js suite on the clone before anything changes on the project.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Back up the project <project> of the projects folder, clone it as <clone>, and test the clone
# ~/workspace/projects · https://<clone>.ddev.site · container-based (DDEV by default)
# the project itself is never changed, rebuilt or removed in this session
# nothing on the host: no composer, drush, npm or mysql outside a site's container

1. bash cmd-tool-backup-project.sh <project>
   tell me the two files it wrote in backups/projects/
2. bash cmd-tools-clone.sh <project> --to <clone>
3. bash cmd-tools-hostnames.sh <clone>
   tell me the address the clone answers at
4. bash cmd-tools-testing.sh <clone> --dry-run
   bash cmd-tools-testing.sh <clone> --run
   if the clone has no testing stack, say so and ask before setting one up
5. bash cmd-tools-checks.sh <clone> --list
   the code-quality checks the project declares

If a command fails, show the line that failed and stop. Do not retry with other flags.
Report the backup, the address of the clone, and the totals of the run.
Then ask me what to try on the clone, or whether to remove it with: bash cmd-tools-remove.sh <clone>
"""
```
