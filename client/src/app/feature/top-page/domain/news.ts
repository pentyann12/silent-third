/** ニュース区分 */
export interface NewsCategory {
  values: 'release' | 'update';
}

/** トップページ掲載ニュース */
export interface News {
  date: Date,
  category: NewsCategory,
  description: string,
};
