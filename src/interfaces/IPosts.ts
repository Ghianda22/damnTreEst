export interface Posts {
    posts: Array<Post>
}

export interface Post {
    delay: number,
    status: number,
    comment: string,
    followingAuthor: boolean,
    datetime: string,
    authorName: string,
    pversion: string,
    author: string
}


// {
//   "posts": [
//     {
//         "delay": 0,
//         "status": 0,
//         "comment": "ciao bel treno",
//         "followingAuthor": false,
//         "datetime": "2022-06-14 19:39:30.758840",
//         "authorName": "Spinacino",
//         "pversion": "9",
//         "author": "139596"
//     },
// }