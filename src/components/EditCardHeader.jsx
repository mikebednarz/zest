const EditCardHeader = () => {
  return (
    <div className="my-recipes-container">
    <h1 className="heading">Zest</h1>
    <p className="main-header-subtext">{`Edit Card`}</p>
    <div className="my-recipes-header">
      <a href="/" className="main-header-subtext-2">Home</a>
      <span className="main-header-subtext-2">{` | `}</span>
      <a href="/myrecipes" className="main-header-subtext-2">Recipes</a>
    </div>
  </div>
  )
};

export default EditCardHeader;