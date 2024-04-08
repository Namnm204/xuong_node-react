const Blogs = () => {
  return (
    <div className="main-content-blog">
      <h1 className="main-content-blog_title">BLOG</h1>
      <hr />
      <div className="main-content-blog-box">
        <div className="main-content-blog-box-item">
          <div className="main-content-blog-box-item-img">
            <img src="https://picsum.photos/id/1/200/300" alt="" />
          </div>
          <div className="main-content-blog-box-item-mota">
            <h2>THE ULTIMATE SOFA BUYING GUIDE</h2>
            <p>
              The versatility of our living space is more crucial than ever. But
              buying a sofa might be a difficult undertaking. Your needs and the
              size of your living area will determine everything, However, don’t
              worry, were are here to help you
            </p>
            <span>ABOUT</span>
            {/* <ion-icon className="icon" name="arrow-forward-outline" /> */}
            arrow-forward-outline
            <hr />
          </div>
        </div>
        <div className="main-content-blog-box-item">
          <div className="main-content-blog-box-item-img">
            <img src="https://picsum.photos/id/1/200/300" alt="" />
          </div>
          <div className="main-content-blog-box-item-mota">
            <h2>A BEDROOM MUST HAVE SOME THING LIKE THIS</h2>
            <p>
              Your level of comfort when geting into and out of bed can be
              greatly influenced by the bed frame you choose. It may
              significantly affect how want your bedroom to feet and look
            </p>
            <span>ABOUT</span>
            {/* <ion-icon className="icon" name="arrow-forward-outline" /> */}
            arrow-forward-outline
            <hr />
          </div>
        </div>
        <div className="main-content-blog-box-item mt-50">
          <div className="main-content-blog-box-item-img">
            <img src="https://picsum.photos/id/1/200/300" alt="" />
          </div>
          <div className="main-content-blog-box-item-mota">
            <h2>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</h2>
            <p>
              People do a lot of research to make sure they purchase the ideal
              televisoin. And like the rest of us, you want to keep that
              gorgeous flat srceen in your living or bedroom on a table or stand
            </p>
            <span>ABOUT</span>
            {/* <ion-icon className="icon" name="arrow-forward-outline" /> */}
            arrow-forward-outline
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
