export default interface data {
    results?: [{
        name: string;
        media_type: "tv" | "movie";
        original_title: string;
        id: string;
        vote_average: string;
        overview: string;
        backdrop_path: string;
    }]
}