import { GetArticlesQuery } from "./generated";

export type ArticleFromQuery = NonNullable<GetArticlesQuery['articles'][number]>;