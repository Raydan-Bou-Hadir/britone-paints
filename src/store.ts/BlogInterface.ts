

export interface Blog {
    id: number;
    blogTitle: string;
    blogSubTitle: string;
    blogDescription: string;
    blogImage: string;
    blogDate: string;
    blogAuther: string;
}

export interface BlogStoreState {
    blogGroup: Blog[];
}