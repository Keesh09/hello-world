
function Cards({ post }) {
    console.log(post);

    return (
       <>
        <h1>Testing Card</h1>
        <div style={{
            'border': '1px solid black',
            'padding': '30px',
            'margin': '10px',
        }}> <b> {post.id}:  </b>
            <p> {post.title} </p>
            <p> {post.body} </p>
        </div>
        </>
    )
}

export default Cards