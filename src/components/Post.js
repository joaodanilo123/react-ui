import "../style/Post.scss";

function Post({author, content, profile_pic}){
    return (
        <section className="Post">
            <header className="postHeader">
                <img src={profile_pic} alt="profile-picture"/>
                <h4>{author}</h4>
            </header>
            <article className="postArticle">
                {content}
            </article>
            
        </section>
    )
}

export default Post;