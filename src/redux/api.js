import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { EXERCISES_CATEGORY, PRODUCTS_FILTER } from '../utils/constants';
const { MUSCLES, BODY_PART, EQUIPMENT } = EXERCISES_CATEGORY;
const { QUERY, RECOMMENDED, CATEGORY } = PRODUCTS_FILTER;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://power-pulse-api.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/users/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // verify: builder.mutation({
    //   query: credentials => ({
    //     url: '/verify',
    //     method: 'POST',
    //     body: credentials,
    //   }),
    // }),
    addUserParams: builder.mutation({
      query: credentials => ({
        url: '/users/params',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateUserParams: builder.mutation({
      query: credentials => ({
        url: '/users/params',
        method: 'PUT',
        body: credentials,
      }),
    }),
    updateUserName: builder.mutation({
      query: credentials => ({
        url: '/users/username',
        method: 'PATCH',
        body: credentials,
      }),
    }),
    updateUserAvatar: builder.mutation({
      query: credentials => ({
        url: '/users/avatar',
        method: 'PATCH',
        body: credentials,
      }),
    }),
    fetchUserParams: builder.query({
      query: () => '/users/params',
    }),
    refresh: builder.query({
      query: () => ({ url: '/users/current' }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    fetchAllProducts: builder.query({
      query: filter =>
        `/products${
          filter
            ? `?${filter[QUERY] ? `${QUERY}=${filter[QUERY]}&` : ''}${
                filter[RECOMMENDED]
                  ? `${RECOMMENDED}=${filter[RECOMMENDED]}&`
                  : ''
              }${
                filter[CATEGORY] ? `${CATEGORY}=${filter[CATEGORY]}&` : ''
              }page=${filter.page || 1}`
            : ''
        }`,
    }),
    fetchAllExercises: builder.query({
      query: filter =>
        `/training/exercises${
          filter
            ? `?${filter[MUSCLES] ? `${MUSCLES}=${filter[MUSCLES]}&` : ''}${
                filter[BODY_PART] ? `${BODY_PART}=${filter[BODY_PART]}&` : ''
              }${
                filter[EQUIPMENT] ? `${EQUIPMENT}=${filter[EQUIPMENT]}&` : ''
              }page=${filter.page || 1}`
            : ''
        }`,
    }),
    fetchExercisesSubcategories: builder.query({
      query: category =>
        `/training/subcategories${category ? `?filter=${category}` : ''}`,
    }),
    fetchDiary: builder.query({
      query: date => `/diary/${date}`,
    }),
    addProduct: builder.mutation({
      query: credentials => ({
        url: '/day/diaryProducts',
        method: 'POST',
        body: credentials,
      }),
    }),
    addExercise: builder.mutation({
      query: credentials => ({
        url: '/day/diaryExercises',
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/day/diaryProducts/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteExercise: builder.mutation({
      query: id => ({
        url: `/day/diaryExercises/${id}`,
        method: 'DELETE',
      }),
    }),
    // fetchStatistic: builder.query({
    //   query: () => '/statistic',
    // }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  // useVerifyMutation,
  useAddUserParamsMutation,
  useUpdateUserParamsMutation,
  useUpdateUserNameMutation,
  useUpdateUserAvatarMutation,
  useLazyFetchUserParamsQuery,
  useLazyRefreshQuery,
  useLogoutMutation,
  useLazyFetchAllProductsQuery,
  useLazyFetchAllExercisesQuery,
  useFetchExercisesSubcategoriesQuery,
  useLazyFetchDiaryQuery,
  useAddProductMutation,
  useAddExerciseMutation,
  useDeleteProductMutation,
  useDeleteExerciseMutation,
  // useFetchStatisticQuery,
} = api;
