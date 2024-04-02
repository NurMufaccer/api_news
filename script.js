const handleNewsCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const newsTitleContainer = document.getElementById("newsTitleContainer");
  data.data.news_category.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="newsCategoryBtn" onclick="handleNews('${item.category_id}')">${item.category_name}</button>`;
    newsTitleContainer.appendChild(div);
  });
};

const handleNews = async (catId) => {
  document.getElementById("loading").style.display = "block";
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catId}`
  );
  const data = await response.json();
  const newsContentBox = document.getElementById("newsContainer");
  newsContentBox.innerHTML = "";
  data.data.forEach((item) => {
    document.getElementById("loading").style.display = "none";
    const div = document.createElement("div");
    div.classList.add("newsBlog");
    div.innerHTML = `
<div class="newsBlogImage">
  <img src="${item.image_url}" alt="" />
</div>
<div class="newsBlogContent">
  <h3 class="newsHeading">
    The best fashion influencer to follow for sartorial inspiration
  </h3>
  <p class="newsDescription">
    From our favorite UK influencer to the best missives from Milan
    and the coolest New Yorkers, read on some of the best fashion
    blogs out there, and for even more inspiration, do head to our
    separate black fashion influencer round-up.
    <br />
    <br />
    Fancy some shopping deals? Check out these amazing sales: Zara
    Black Friday, ASOS Black Friday, Miasma Black Friday and Gucci
    Black Friday...
  </p>

  <div class="repo">
    <div class="repoImg">
      <img src="${item.author.img}" alt="" />
    </div>
    <div class="newsFooter">
      <h3 class="repoName">${item.author.name}</h3>
      <p class="repoDate">${item.author.published_date}</p>
    </div>
  </div>
</div>
`;
    newsContainer.appendChild(div);
  });
};
const handleSearch = () => {
  const inputFieldValue = document.getElementById("inputField").value;
  if (inputFieldValue) {
    handleNews(inputFieldValue);
  } else {
    alert("Please entre a valid number");
  }
};
handleNews("08");
handleNewsCategory();
