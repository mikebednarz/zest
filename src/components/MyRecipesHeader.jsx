const MyRecipesHeader = () => {
  const username = window.localStorage.getItem('NAME') ? JSON.parse(window.localStorage.getItem('NAME')) : 'Stranger';

  return (
    <div className="my-recipes-container">
      <h1 className="heading">Zest</h1>
      <p className="main-header-subtext">{`${username}'s Recipes`}</p>
      <div className="my-recipes-header">
        <a href="/" className="main-header-subtext-2">Back to Home</a>
      </div>
    </div>
  )
};

export default MyRecipesHeader;