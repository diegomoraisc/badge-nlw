const userSocialMedia = {
  github: 'diegomoraisc',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'digsmorais',
  twitter: 'digsmoraisc'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userGitHub.href = data.html_url
      userAvatar.src = data.avatar_url
    })
}
getGitHubProfileInfos()
