async function fetchProfileData() {
    const url = 'https://github.com/Jeffbet/portifolio/blob/6011eed3d7c1ec9c95992fbc148170405f3ee057/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
