export interface GetPostReqModel {
  count?: number; // determines how many posts per page are returned (default value is 10)
  page?: number; // return a specific page number from the results
  post_type?: string; // used to retrieve custom post types
}
