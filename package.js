Package.describe({
  name: 'ternopiljs:simple-gallery',
  version: '1.0.1',
  summary: 'Simple gallery for Meteor',
  git: 'https://github.com/TernopilJS/simple-gallery',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('simple-gallery.css', 'client');
});