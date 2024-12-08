const newsCategorys = [
    'release',
    'update',
  ] as const;
  
  /** ニュース区分 */
  export type NewsCategory = (typeof newsCategorys)[number];
  
  /** トップページ掲載ニュース */
  export type News = {
    date: Date,
    category: NewsCategory,
    description: string,
  };
  