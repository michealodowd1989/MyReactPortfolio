export class myUtilsClass extends Component{

showArticle(articleId) {
    dispatch({type: "SHOW_ARTICLE", id: articleId, state: "loading"});
    $.ajax({
        url: "/article/#{articleId}",
        success: function (data, textStatus, jqXHR) {
            dispatch({type: "ARTICLE_LOADED", id: articleId, state: "ready", content: data});
        }
    });
}
}