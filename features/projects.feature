Feature: The Projects workspace plugin
  Once the plugin is activated and installed, the projects workspace is on the dashboard, and the
  Plugins page lists the plugin with its four steps.

  Scenario: The workspace page is there
    Given I am on "/projects"
     Then I should see "Projects"

  Scenario: The plugin is listed on the Plugins page
    Given I am on "/settings/plugins"
     Then I should see "Projects"
      And I should see "@webship/workspace-projects"
