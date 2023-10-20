// export{}

export interface InitalState{
videos: HomeVideos[];
currentPlaying: CurrentPlaying | null;
searchTerm:string;
searchResults:[];
nextPageToken :string|null;
recommendedVideos:RecommendedVideos[],

}

export interface HomeVideos{}
export interface CurrentPlaying{}
export interface RecommendedVideos{}
