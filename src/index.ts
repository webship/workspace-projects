/**
 * The Projects workspace for Webship Workspace: the `projects/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'projects';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['projects-site-keeper'];
export const SKILLS = ['projects-workflow'];
export const AI_COMMANDS = ['projects-clone'];
export const PROMPTS = ['projects-backup-clone-and-test'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The projects/ workspace is the Projects workspace (a plugin, @webship.co/workspace-projects); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`projects-site-keeper\` (ai-agents/), the skill \`projects-workflow\` (ai-skills/), the command \`/projects-clone\` (ai-commands/) and the prompt \`projects-backup-clone-and-test\` (ai-prompts/).`);
}
