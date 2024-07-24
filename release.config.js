
module.exports = {
    branches: ['main'],  // or the name of your main branch
    ci: false,
    plugins: [
    //   '@semantic-release/github', this is used for ci cd automation
      "@semantic-release/commit-analyzer",
      [
        "@semantic-release/release-notes-generator",
        {
          "writerOpts": {
            " changelogFile": "CHANGELOG.md",  
            "preset": "conventional"        
          }
        }
      ],
      [
        '@semantic-release/changelog',
        {
          "changelogFile": "CHANGELOG.md"
        }
      ],
      [
        '@semantic-release/git',
        {
          "assets": ['package.json', 'CHANGELOG.md'],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
      ],
      [
        "@semantic-release/npm",
        {
          "npmPublish": false // Disable publishing to npm
        }
      ],
    ]
  };
  


