export interface Noticias {
    status:       string;
    totalResults: number;
    results:      NoticiasDetalle[];
    nextPage:     number;
}

export interface NoticiasDetalle {
    title:             string;
    link:              string;
    keywords:          string[] | null;
    creator:           string[] | null;
    video_url:         null;
    description:       null | string;
    content:           null | string;
    pubDate:           Date;
    full_description?: string;
    image_url:         null | string;
    source_id:         string;
}