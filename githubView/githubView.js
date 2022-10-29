class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        this.display(repoData);
      });
    });
  }

  display(repo) {
    const repoName = document.createElement('h3');
    repoName.innerText = repo['name']
    document.querySelector('body').append(repoName)

    const repoDescription = document.createElement('div');
    repoDescription.innerText = repo['description'];
    document.querySelector('body').append(repoDescription);

    const img = document.createElement('img');
    img.src = repo['organization']['avatar_url'];
    document.querySelector('body').append(img);
  }
}

module.exports = GithubView;