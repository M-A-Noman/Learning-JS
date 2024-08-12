import { CastDetails, MovieDetails, TVDetails } from "./details.model";

export interface pageDetailsState{
    loading:boolean,
    data:MovieDetails|TVDetails|CastDetails,
    error:any
}
export interface detailsModuleState{
    castDetails:pageDetailsState,
    movieDetails:pageDetailsState,
    tvDetails:pageDetailsState
}