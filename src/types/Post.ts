// Generated by https://quicktype.io

export interface IPost {
    title:    string;
    image:    string;
    content:  string;
    comments: IComment[];
}

export interface IComment {
    username: string;
    text:     string;
}
