import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export type AllFootersInput = {
  order?: InputMaybe<Scalars['String']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllGalleryInput = {
  first?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllNewsCategoriesInput = {
  order?: InputMaybe<Scalars['String']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllNewsInput = {
  first?: InputMaybe<Scalars['Int']['input']>
  news_category_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  order?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  tag_id?: InputMaybe<Scalars['Int']['input']>
}

export type AllPagesInput = {
  first?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  page_category_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllProductCategoriesInput = {
  order?: InputMaybe<Scalars['String']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllProductsInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllSidebarsInput = {
  order?: InputMaybe<Scalars['String']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type AllTextsInput = {
  first?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type App = {
  __typename?: 'App'
  categories?: Maybe<Array<Maybe<NewsCategory>>>
  id: Scalars['ID']['output']
  logo?: Maybe<Image>
  name: Scalars['String']['output']
  slug: Scalars['String']['output']
}

export type Block = {
  __typename?: 'Block'
  content?: Maybe<Scalars['String']['output']>
  galleries: Array<Gallery>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  order?: Maybe<Scalars['Boolean']['output']>
  slug: Scalars['String']['output']
}

export type BlockItem = {
  __typename?: 'BlockItem'
  data?: Maybe<Block>
  meta?: Maybe<Meta>
}

export type Footer = {
  __typename?: 'Footer'
  id: Scalars['ID']['output']
  pages?: Maybe<Array<Maybe<Page>>>
  title?: Maybe<Scalars['String']['output']>
}

export type FooterInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type FootersList = {
  __typename?: 'FootersList'
  data?: Maybe<Array<Maybe<Footer>>>
}

export type Gallery = {
  __typename?: 'Gallery'
  created_at: Scalars['DateTime']['output']
  gallery?: Maybe<Array<Maybe<Image>>>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  slug?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['Boolean']['output']>
  type?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['DateTime']['output']
}

export type GalleryInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type GalleryItem = {
  __typename?: 'GalleryItem'
  data?: Maybe<Gallery>
}

export type GalleryList = {
  __typename?: 'GalleryList'
  data?: Maybe<Array<Maybe<Gallery>>>
  paginatorInfo?: Maybe<PaginatorInfo>
}

export type Image = {
  __typename?: 'Image'
  original?: Maybe<Scalars['String']['output']>
  thumb?: Maybe<Scalars['String']['output']>
  thumb2?: Maybe<Scalars['String']['output']>
}

export type Meta = {
  __typename?: 'Meta'
  meta_description?: Maybe<Scalars['String']['output']>
  meta_keywords?: Maybe<Scalars['String']['output']>
  meta_title?: Maybe<Scalars['String']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  requestCreate?: Maybe<RequestItem>
}

export type MutationRequestCreateArgs = {
  input?: InputMaybe<RequestCreateInput>
}

export type News = {
  __typename?: 'News'
  categories?: Maybe<Array<Maybe<NewsCategory>>>
  contentAll: Scalars['String']['output']
  created_at: Scalars['DateTime']['output']
  gallery_direction?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Image>
  images?: Maybe<Array<Maybe<Image>>>
  images_titleAll?: Maybe<Scalars['String']['output']>
  published_at: Scalars['DateTime']['output']
  slug: Scalars['String']['output']
  status: Scalars['Boolean']['output']
  titleAll: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
}

export type NewsByIds = {
  __typename?: 'NewsByIds'
  data: Array<Maybe<News>>
}

export type NewsByIdsInput = {
  ids: Array<Scalars['Int']['input']>
}

export type NewsCategoriesList = {
  __typename?: 'NewsCategoriesList'
  data?: Maybe<Array<Maybe<NewsCategory>>>
}

export type NewsCategory = {
  __typename?: 'NewsCategory'
  children?: Maybe<Array<Maybe<NewsCategory>>>
  created_at: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  nameAll: Scalars['String']['output']
  news: Array<Maybe<News>>
  order: Scalars['String']['output']
  parent_id?: Maybe<Scalars['String']['output']>
  show_in_footer: Scalars['Boolean']['output']
  show_in_header: Scalars['Boolean']['output']
  slug: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
}

export type NewsCategoryInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type NewsInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type NewsItem = {
  __typename?: 'NewsItem'
  data?: Maybe<News>
  meta?: Maybe<Meta>
}

export type NewsList = {
  __typename?: 'NewsList'
  data?: Maybe<Array<Maybe<News>>>
  paginatorInfo?: Maybe<PaginatorInfo>
  tags?: Maybe<Array<Maybe<Tag>>>
}

export type Order = {
  __typename?: 'Order'
  arrival_city?: Maybe<Scalars['String']['output']>
  cargo_type?: Maybe<Scalars['String']['output']>
  company: Scalars['String']['output']
  date?: Maybe<Scalars['DateTime']['output']>
  dispatch_city?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  height?: Maybe<Scalars['Float']['output']>
  length?: Maybe<Scalars['Float']['output']>
  name: Scalars['String']['output']
  phone: Scalars['String']['output']
  weight?: Maybe<Scalars['Float']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input']
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT',
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM',
}

export type OrderCreateInput = {
  arrival_city?: InputMaybe<Scalars['String']['input']>
  cargo_type?: InputMaybe<Scalars['String']['input']>
  company: Scalars['String']['input']
  date?: InputMaybe<Scalars['DateTime']['input']>
  dispatch_city?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  length?: InputMaybe<Scalars['Float']['input']>
  name: Scalars['String']['input']
  phone: Scalars['String']['input']
  weight?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type OrderItem = {
  __typename?: 'OrderItem'
  data?: Maybe<Order>
}

export type OrderList = {
  __typename?: 'OrderList'
  data: Array<Maybe<Order>>
}

export type Page = {
  __typename?: 'Page'
  blocks: Array<Block>
  created_at: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  meta_descriptionAll?: Maybe<Scalars['String']['output']>
  meta_titleAll?: Maybe<Scalars['String']['output']>
  show_in_footer?: Maybe<Scalars['Boolean']['output']>
  show_in_header?: Maybe<Scalars['Boolean']['output']>
  slug?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['Boolean']['output']>
  titleAll: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
}

export type PageCategory = {
  __typename?: 'PageCategory'
  children?: Maybe<Array<Maybe<PageCategory>>>
  created_at: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  order: Scalars['String']['output']
  parent_id?: Maybe<Scalars['String']['output']>
  show_in_footer: Scalars['Boolean']['output']
  show_in_header: Scalars['Boolean']['output']
  slug: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
}

export type PageInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type PageItem = {
  __typename?: 'PageItem'
  data?: Maybe<Page>
  meta?: Maybe<Meta>
}

export type PagesList = {
  __typename?: 'PagesList'
  data?: Maybe<Array<Maybe<Page>>>
  paginatorInfo?: Maybe<PaginatorInfo>
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo'
  /** Number of items in the current page. */
  count: Scalars['Int']['output']
  /** Index of the current page. */
  currentPage: Scalars['Int']['output']
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output']
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output']
  /** Number of items per page. */
  perPage: Scalars['Int']['output']
  /** Number of total available items. */
  total: Scalars['Int']['output']
}

export type Price = {
  __typename?: 'Price'
  price_dol?: Maybe<Scalars['String']['output']>
  price_grn?: Maybe<Scalars['String']['output']>
}

export type Product = {
  __typename?: 'Product'
  category?: Maybe<ProductCategory>
  descriptionAll?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Array<Maybe<Image>>>
  nameAll?: Maybe<Scalars['String']['output']>
  price?: Maybe<Price>
  status?: Maybe<Scalars['Boolean']['output']>
}

export type ProductCategoriesList = {
  __typename?: 'ProductCategoriesList'
  data?: Maybe<Array<Maybe<ProductCategory>>>
}

export type ProductCategory = {
  __typename?: 'ProductCategory'
  banner?: Maybe<Image>
  children?: Maybe<Array<Maybe<ProductCategory>>>
  contentAll?: Maybe<Scalars['String']['output']>
  created_at: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  image?: Maybe<Image>
  meta_descriptionAll?: Maybe<Scalars['String']['output']>
  meta_titleAll?: Maybe<Scalars['String']['output']>
  order: Scalars['String']['output']
  parent_id?: Maybe<Scalars['String']['output']>
  products?: Maybe<Array<Maybe<Product>>>
  slug: Scalars['String']['output']
  title_h1All?: Maybe<Scalars['String']['output']>
  title_h2All?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['DateTime']['output']
}

export type ProductCategoryInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type ProductInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type ProductsList = {
  __typename?: 'ProductsList'
  data?: Maybe<Array<Maybe<Product>>>
}

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query'
  /** View all Footer with pagination. */
  allFooters: FootersList
  /** View all Galleries with pagination. */
  allGalleries: GalleryList
  /** View all News with pagination. */
  allNews: NewsList
  /** View all News Categories with pagination. */
  allNewsCategories: NewsCategoriesList
  allOrders?: Maybe<OrderList>
  /** View all Pages with pagination. */
  allPages: PagesList
  /** View all Product Categories with pagination. */
  allProductCategories: ProductCategoriesList
  /** View all Product Categories with pagination. */
  allProducts: ProductsList
  allRequests?: Maybe<RequestList>
  allSettings?: Maybe<SettingList>
  /** View all Sidebar Categories with pagination. */
  allSidebars: SidebarsList
  /** View all Pages with pagination. */
  allTextsInSite: TextList
  block?: Maybe<Block>
  /** View single Footer. */
  footer?: Maybe<Footer>
  /** View single Gallery. */
  gallery?: Maybe<GalleryItem>
  /** View single New. */
  news?: Maybe<NewsItem>
  /** View single News Category. */
  newsCategory?: Maybe<NewsCategory>
  order?: Maybe<OrderItem>
  /** View single Page. */
  page?: Maybe<PageItem>
  /** View single Product Category. */
  product?: Maybe<Product>
  /** View single Product Category. */
  productCategory?: Maybe<ProductCategory>
  request?: Maybe<RequestItem>
  setting?: Maybe<SettingItem>
  /** View single Sidebar. */
  sidebar?: Maybe<Sidebar>
  /** View single Text in site. */
  textInSite?: Maybe<TextItem>
  /** Find a single user by an identifying attribute. */
  user?: Maybe<User>
  /** List multiple users. */
  users: UserPaginator
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllFootersArgs = {
  input: AllFootersInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllGalleriesArgs = {
  input: AllGalleryInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllNewsArgs = {
  input: AllNewsInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllNewsCategoriesArgs = {
  input: AllNewsCategoriesInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllPagesArgs = {
  input: AllPagesInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllProductCategoriesArgs = {
  input: AllProductCategoriesInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllProductsArgs = {
  input: AllProductsInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllSidebarsArgs = {
  input: AllSidebarsInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAllTextsInSiteArgs = {
  input: AllTextsInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryBlockArgs = {
  id: Scalars['ID']['input']
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryFooterArgs = {
  input: FooterInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryGalleryArgs = {
  input: GalleryInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryNewsArgs = {
  input: NewsInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryNewsCategoryArgs = {
  input: NewsCategoryInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPageArgs = {
  input: PageInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryProductArgs = {
  input: ProductInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryProductCategoryArgs = {
  input: ProductCategoryInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryRequestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySidebarArgs = {
  input: SidebarInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryTextInSiteArgs = {
  input: TextInput
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Indicates what fields are available at the top level of a query operation. */
export type QueryUsersArgs = {
  first?: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
}

export type Request = {
  __typename?: 'Request'
  comment?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
}

export type RequestCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
}

export type RequestItem = {
  __typename?: 'RequestItem'
  data?: Maybe<Request>
}

export type RequestList = {
  __typename?: 'RequestList'
  data: Array<Maybe<Request>>
}

export type Setting = {
  __typename?: 'Setting'
  created_at: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  key: Scalars['String']['output']
  name: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
  value: Scalars['String']['output']
}

export type SettingItem = {
  __typename?: 'SettingItem'
  data?: Maybe<Setting>
}

export type SettingList = {
  __typename?: 'SettingList'
  data?: Maybe<Array<Maybe<Setting>>>
}

export type Sidebar = {
  __typename?: 'Sidebar'
  id: Scalars['ID']['output']
  pages?: Maybe<Array<Maybe<Page>>>
  title?: Maybe<Scalars['String']['output']>
}

export type SidebarInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type SidebarsList = {
  __typename?: 'SidebarsList'
  data?: Maybe<Array<Maybe<Sidebar>>>
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC',
}

export type Tag = {
  __typename?: 'Tag'
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  slug: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type TextInSite = {
  __typename?: 'TextInSite'
  id: Scalars['ID']['output']
  image?: Maybe<Scalars['String']['output']>
  key?: Maybe<Scalars['String']['output']>
  textAll: Scalars['String']['output']
}

export type TextInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type TextItem = {
  __typename?: 'TextItem'
  data?: Maybe<TextInSite>
  meta?: Maybe<Meta>
}

export type TextList = {
  __typename?: 'TextList'
  data?: Maybe<Array<Maybe<TextInSite>>>
  paginatorInfo?: Maybe<PaginatorInfo>
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT',
}

export type User = {
  __typename?: 'User'
  created_at: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  email_verified_at?: Maybe<Scalars['DateTime']['output']>
  first_name: Scalars['String']['output']
  id: Scalars['ID']['output']
  last_name: Scalars['String']['output']
  updated_at: Scalars['DateTime']['output']
}

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator'
  /** A list of User items. */
  data: Array<User>
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo
}

export type AllPagesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
}>

export type AllPagesQuery = {
  __typename?: 'Query'
  allPages: {
    __typename?: 'PagesList'
    data?: Array<{
      __typename?: 'Page'
      meta_descriptionAll?: string | null
      meta_titleAll?: string | null
      id: string
      slug?: string | null
      blocks: Array<{ __typename?: 'Block'; content?: string | null; id: string; slug: string }>
    } | null> | null
  }
}

export type AllProductCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type AllProductCategoriesQuery = {
  __typename?: 'Query'
  allProductCategories: {
    __typename?: 'ProductCategoriesList'
    data?: Array<{
      __typename?: 'ProductCategory'
      title_h2All?: string | null
      title_h1All?: string | null
      slug: string
      children?: Array<{
        __typename?: 'ProductCategory'
        contentAll?: string | null
        slug: string
        title_h1All?: string | null
        title_h2All?: string | null
        banner?: {
          __typename?: 'Image'
          original?: string | null
          thumb?: string | null
          thumb2?: string | null
        } | null
        products?: Array<{
          __typename?: 'Product'
          nameAll?: string | null
          id: string
          images?: Array<{
            __typename?: 'Image'
            thumb?: string | null
            thumb2?: string | null
            original?: string | null
          } | null> | null
        } | null> | null
        image?: {
          __typename?: 'Image'
          original?: string | null
          thumb?: string | null
          thumb2?: string | null
        } | null
      } | null> | null
    } | null> | null
  }
}

export type AllSettingsQueryVariables = Exact<{ [key: string]: never }>

export type AllSettingsQuery = {
  __typename?: 'Query'
  allSettings?: {
    __typename?: 'SettingList'
    data?: Array<{ __typename?: 'Setting'; key: string; value: string } | null> | null
  } | null
}

export type AllTextsInSiteQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
}>

export type AllTextsInSiteQuery = {
  __typename?: 'Query'
  allTextsInSite: {
    __typename?: 'TextList'
    data?: Array<{
      __typename?: 'TextInSite'
      key?: string | null
      textAll: string
      id: string
    } | null> | null
  }
}

export type BlockQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type BlockQuery = {
  __typename?: 'Query'
  block?: {
    __typename?: 'Block'
    content?: string | null
    galleries: Array<{
      __typename?: 'Gallery'
      gallery?: Array<{
        __typename?: 'Image'
        original?: string | null
        thumb?: string | null
        thumb2?: string | null
      } | null> | null
    }>
  } | null
}

export type FooterQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>
}>

export type FooterQuery = {
  __typename?: 'Query'
  footer?: {
    __typename?: 'Footer'
    id: string
    title?: string | null
    pages?: Array<{
      __typename?: 'Page'
      meta_descriptionAll?: string | null
      meta_titleAll?: string | null
      id: string
      slug?: string | null
      titleAll: string
    } | null> | null
  } | null
}

export type RequestCreateMutationVariables = Exact<{
  name: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
}>

export type RequestCreateMutation = {
  __typename?: 'Mutation'
  requestCreate?: {
    __typename?: 'RequestItem'
    data?: {
      __typename?: 'Request'
      comment?: string | null
      email?: string | null
      name: string
    } | null
  } | null
}

export type ProductQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>
}>

export type ProductQuery = {
  __typename?: 'Query'
  product?: {
    __typename?: 'Product'
    descriptionAll?: string | null
    id: string
    nameAll?: string | null
    status?: boolean | null
    images?: Array<{
      __typename?: 'Image'
      original?: string | null
      thumb?: string | null
      thumb2?: string | null
    } | null> | null
    price?: { __typename?: 'Price'; price_dol?: string | null; price_grn?: string | null } | null
  } | null
}

export type SidebarQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>
}>

export type SidebarQuery = {
  __typename?: 'Query'
  sidebar?: {
    __typename?: 'Sidebar'
    id: string
    title?: string | null
    pages?: Array<{
      __typename?: 'Page'
      id: string
      meta_descriptionAll?: string | null
      meta_titleAll?: string | null
      slug?: string | null
      titleAll: string
    } | null> | null
  } | null
}

export const AllPagesDocument = gql`
  query AllPages($first: Int, $page: Int) {
    allPages(input: { first: $first, page: $page }) {
      data {
        meta_descriptionAll
        meta_titleAll
        id
        slug
        blocks {
          content
          id
          slug
        }
      }
    }
  }
`

/**
 * __useAllPagesQuery__
 *
 * To run a query within a React component, call `useAllPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPagesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllPagesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPagesQuery, AllPagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, options)
}
export function useAllPagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPagesQuery, AllPagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, options)
}
export function useAllPagesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllPagesQuery, AllPagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, options)
}
export type AllPagesQueryHookResult = ReturnType<typeof useAllPagesQuery>
export type AllPagesLazyQueryHookResult = ReturnType<typeof useAllPagesLazyQuery>
export type AllPagesSuspenseQueryHookResult = ReturnType<typeof useAllPagesSuspenseQuery>
export type AllPagesQueryResult = Apollo.QueryResult<AllPagesQuery, AllPagesQueryVariables>
export const AllProductCategoriesDocument = gql`
  query AllProductCategories {
    allProductCategories(input: {}) {
      data {
        title_h2All
        title_h1All
        slug
        children {
          contentAll
          slug
          title_h1All
          title_h2All
          banner {
            original
            thumb
            thumb2
          }
          products {
            nameAll
            id
            images {
              thumb
              thumb2
              original
            }
          }
          image {
            original
            thumb
            thumb2
          }
        }
      }
    }
  }
`

/**
 * __useAllProductCategoriesQuery__
 *
 * To run a query within a React component, call `useAllProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllProductCategoriesQuery,
    AllProductCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllProductCategoriesQuery, AllProductCategoriesQueryVariables>(
    AllProductCategoriesDocument,
    options,
  )
}
export function useAllProductCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProductCategoriesQuery,
    AllProductCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllProductCategoriesQuery, AllProductCategoriesQueryVariables>(
    AllProductCategoriesDocument,
    options,
  )
}
export function useAllProductCategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllProductCategoriesQuery,
    AllProductCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllProductCategoriesQuery, AllProductCategoriesQueryVariables>(
    AllProductCategoriesDocument,
    options,
  )
}
export type AllProductCategoriesQueryHookResult = ReturnType<typeof useAllProductCategoriesQuery>
export type AllProductCategoriesLazyQueryHookResult = ReturnType<
  typeof useAllProductCategoriesLazyQuery
>
export type AllProductCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useAllProductCategoriesSuspenseQuery
>
export type AllProductCategoriesQueryResult = Apollo.QueryResult<
  AllProductCategoriesQuery,
  AllProductCategoriesQueryVariables
>
export const AllSettingsDocument = gql`
  query AllSettings {
    allSettings {
      data {
        key
        value
      }
    }
  }
`

/**
 * __useAllSettingsQuery__
 *
 * To run a query within a React component, call `useAllSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllSettingsQuery, AllSettingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllSettingsQuery, AllSettingsQueryVariables>(AllSettingsDocument, options)
}
export function useAllSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllSettingsQuery, AllSettingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllSettingsQuery, AllSettingsQueryVariables>(
    AllSettingsDocument,
    options,
  )
}
export function useAllSettingsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllSettingsQuery, AllSettingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllSettingsQuery, AllSettingsQueryVariables>(
    AllSettingsDocument,
    options,
  )
}
export type AllSettingsQueryHookResult = ReturnType<typeof useAllSettingsQuery>
export type AllSettingsLazyQueryHookResult = ReturnType<typeof useAllSettingsLazyQuery>
export type AllSettingsSuspenseQueryHookResult = ReturnType<typeof useAllSettingsSuspenseQuery>
export type AllSettingsQueryResult = Apollo.QueryResult<AllSettingsQuery, AllSettingsQueryVariables>
export const AllTextsInSiteDocument = gql`
  query AllTextsInSite($first: Int, $page: Int) {
    allTextsInSite(input: { first: $first, page: $page }) {
      data {
        key
        textAll
        id
      }
    }
  }
`

/**
 * __useAllTextsInSiteQuery__
 *
 * To run a query within a React component, call `useAllTextsInSiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTextsInSiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTextsInSiteQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllTextsInSiteQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>(
    AllTextsInSiteDocument,
    options,
  )
}
export function useAllTextsInSiteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>(
    AllTextsInSiteDocument,
    options,
  )
}
export function useAllTextsInSiteSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllTextsInSiteQuery, AllTextsInSiteQueryVariables>(
    AllTextsInSiteDocument,
    options,
  )
}
export type AllTextsInSiteQueryHookResult = ReturnType<typeof useAllTextsInSiteQuery>
export type AllTextsInSiteLazyQueryHookResult = ReturnType<typeof useAllTextsInSiteLazyQuery>
export type AllTextsInSiteSuspenseQueryHookResult = ReturnType<
  typeof useAllTextsInSiteSuspenseQuery
>
export type AllTextsInSiteQueryResult = Apollo.QueryResult<
  AllTextsInSiteQuery,
  AllTextsInSiteQueryVariables
>
export const BlockDocument = gql`
  query Block($id: ID!) {
    block(id: $id) {
      content
      galleries {
        gallery {
          original
          thumb
          thumb2
        }
      }
    }
  }
`

/**
 * __useBlockQuery__
 *
 * To run a query within a React component, call `useBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlockQuery(
  baseOptions: Apollo.QueryHookOptions<BlockQuery, BlockQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BlockQuery, BlockQueryVariables>(BlockDocument, options)
}
export function useBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlockQuery, BlockQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BlockQuery, BlockQueryVariables>(BlockDocument, options)
}
export function useBlockSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<BlockQuery, BlockQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<BlockQuery, BlockQueryVariables>(BlockDocument, options)
}
export type BlockQueryHookResult = ReturnType<typeof useBlockQuery>
export type BlockLazyQueryHookResult = ReturnType<typeof useBlockLazyQuery>
export type BlockSuspenseQueryHookResult = ReturnType<typeof useBlockSuspenseQuery>
export type BlockQueryResult = Apollo.QueryResult<BlockQuery, BlockQueryVariables>
export const FooterDocument = gql`
  query Footer($id: Int) {
    footer(input: { id: $id }) {
      id
      title
      pages {
        meta_descriptionAll
        meta_titleAll
        id
        slug
        titleAll
      }
    }
  }
`

/**
 * __useFooterQuery__
 *
 * To run a query within a React component, call `useFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFooterQuery(
  baseOptions?: Apollo.QueryHookOptions<FooterQuery, FooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options)
}
export function useFooterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FooterQuery, FooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options)
}
export function useFooterSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<FooterQuery, FooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options)
}
export type FooterQueryHookResult = ReturnType<typeof useFooterQuery>
export type FooterLazyQueryHookResult = ReturnType<typeof useFooterLazyQuery>
export type FooterSuspenseQueryHookResult = ReturnType<typeof useFooterSuspenseQuery>
export type FooterQueryResult = Apollo.QueryResult<FooterQuery, FooterQueryVariables>
export const RequestCreateDocument = gql`
  mutation RequestCreate($name: String!, $comment: String, $email: String) {
    requestCreate(input: { name: $name, comment: $comment, email: $email }) {
      data {
        comment
        email
        name
      }
    }
  }
`
export type RequestCreateMutationFn = Apollo.MutationFunction<
  RequestCreateMutation,
  RequestCreateMutationVariables
>

/**
 * __useRequestCreateMutation__
 *
 * To run a mutation, you first call `useRequestCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestCreateMutation, { data, loading, error }] = useRequestCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      comment: // value for 'comment'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestCreateMutation, RequestCreateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RequestCreateMutation, RequestCreateMutationVariables>(
    RequestCreateDocument,
    options,
  )
}
export type RequestCreateMutationHookResult = ReturnType<typeof useRequestCreateMutation>
export type RequestCreateMutationResult = Apollo.MutationResult<RequestCreateMutation>
export type RequestCreateMutationOptions = Apollo.BaseMutationOptions<
  RequestCreateMutation,
  RequestCreateMutationVariables
>
export const ProductDocument = gql`
  query Product($id: Int) {
    product(input: { id: $id }) {
      descriptionAll
      id
      nameAll
      status
      images {
        original
        thumb
        thumb2
      }
      price {
        price_dol
        price_grn
      }
    }
  }
`

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options)
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options)
}
export function useProductSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options)
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>
export const SidebarDocument = gql`
  query Sidebar($id: Int) {
    sidebar(input: { id: $id }) {
      id
      pages {
        id
        meta_descriptionAll
        meta_titleAll
        slug
        titleAll
      }
      title
    }
  }
`

/**
 * __useSidebarQuery__
 *
 * To run a query within a React component, call `useSidebarQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidebarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSidebarQuery(
  baseOptions?: Apollo.QueryHookOptions<SidebarQuery, SidebarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options)
}
export function useSidebarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SidebarQuery, SidebarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options)
}
export function useSidebarSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<SidebarQuery, SidebarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options)
}
export type SidebarQueryHookResult = ReturnType<typeof useSidebarQuery>
export type SidebarLazyQueryHookResult = ReturnType<typeof useSidebarLazyQuery>
export type SidebarSuspenseQueryHookResult = ReturnType<typeof useSidebarSuspenseQuery>
export type SidebarQueryResult = Apollo.QueryResult<SidebarQuery, SidebarQueryVariables>
